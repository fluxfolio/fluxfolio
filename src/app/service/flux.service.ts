import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import axios from 'axios'
import { setupCache } from 'axios-cache-adapter'

declare function findNodeFromWallet(data: any, wallet: any): any

const cache = setupCache({
    maxAge: 15 * 60 * 1000
})

const api = axios.create({
    adapter: cache.adapter
})

@Injectable()
export class FluxService {
    private GET_FLUX_NODE = 'https://explorer.runonflux.io/api/status?q=getFluxNodes'
    private GET_WALLET_AMT = 'https://explorer.runonflux.io/api/addr/{0}/?noTxList=1'
    private GET_NODE_COUNT = 'https://api.runonflux.io/daemon/getzelnodecount'

    constructor(
        private http: HttpClient
    ) {

    }

    getWalletAmount(wallet: any){
        return this.http.get<any>(this.GET_WALLET_AMT.replace('{0}', wallet));
    }

    async updateAll(fluxElement: { name?: string; wallet?: any; amount?: any; }){
        for(let i = 0; i < fluxElement.wallet.length; i++){
            await this.getWalletAmountByIndex(fluxElement, i)
            await this.getWalletNodeByIndex(fluxElement, i);
        }

        return fluxElement
    }

    getWalletAmountByIndex(fluxElement: any, i: any){
        return new Promise(resolve => {
            let wallet = fluxElement.wallet[i]
            this.getWalletAmount(wallet).subscribe((data) => {
                if(data){
                    fluxElement.amount[i] = data.balance
                    resolve('receive data balance')
                }
            })
        });
    }

    getWalletNodeByIndex(fluxElement: any, i: any){
        return new Promise(resolve => {
            api({
                url: this.GET_FLUX_NODE,
                method: 'get'
            }).then(async (response) => {
                let data = response.data

                let dataFilter = await findNodeFromWallet(data, fluxElement.wallet[i])
                if(dataFilter){
                    fluxElement.node = []
                    dataFilter.forEach((element: any) => {
                        let nodeData = {
                            tier: element.tier,
                            ip: element.ip,
                            payment_address: element.payment_address,
                            lastpaid: element.lastpaid,
                            rank: element.rank
                        }
                        fluxElement.node.push(nodeData)
                    });
    
                    resolve('receive data node')
                }

                resolve('receive data no node')
            })
        })
    }

    getNodeCount() :any{
        return new Promise(resolve => {
            api({
                url: this.GET_NODE_COUNT,
                method: 'get'
            }).then(async (response) => {
                resolve(response.data.data)
            })
        })
    }
}