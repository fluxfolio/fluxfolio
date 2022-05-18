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

    updateAll(fluxElement: { name?: string; wallet?: any; }){
        fluxElement.wallet.forEach((wallet: any) => {
            this.getWalletAmount(wallet).subscribe((data) => {
                if(data){
                    console.log(data)
                    console.log(data.amount)
                }
            })
        });
    }
}