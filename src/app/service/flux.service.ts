import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class FluxService {
    GET_FLUX_NODE = 'https://explorer.runonflux.io/api/status?q=getFluxNodes'
    GET_WALLET_AMT = 'https://explorer.runonflux.io/api/addr/{0}/?noTxList=1'

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
}