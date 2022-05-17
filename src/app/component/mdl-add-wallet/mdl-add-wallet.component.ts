import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'mdl-add-wallet',
    templateUrl: './mdl-add-wallet.component.html',
    styleUrls: ['./mdl-add-wallet.component.scss']
})

export class MdlAddWalletComponent implements OnInit {
    chains = [
        { name: 'flux', checked: false }
    ]

    walletInput = ''

    constructor(
        
    ) {
        
    }

    ngOnInit() {
        
    }

    clearData(){
        this.walletInput = ''
    }

    addWallet(){
        console.log(this.chains[0].checked)
    }

    fieldsChange(values:any){
        console.log(values.currentTarget.checked);
    }

    disabledChain(coin: string){
        if(coin == 'flux') return this.disabledFlux()
        return true
    }

    disabledFlux(){
        return !this.walletInput.startsWith('t1')
    }
}