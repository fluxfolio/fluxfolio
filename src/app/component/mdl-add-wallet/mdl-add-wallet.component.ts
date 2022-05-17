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
    validateText = ''

    constructor(
        
    ) {
        
    }

    ngOnInit() {
        
    }

    clearData(){
        this.walletInput = ''
        this.chains.forEach(element => {
            element.checked = false
        })
        this.validateText = ''
    }

    validateWallet(){
        
    }

    addWallet(){
        let chainChecked = false
        for(let chain of this.chains){
            if(chain.checked){
                chainChecked = true
                break
            }
        }
        if(this.walletInput && chainChecked){

        }
        else{
            this.validateText = 'red basic'
        }
    }

    fieldsChange(values:any, i:any){
        this.chains[i].checked = values.currentTarget.checked
    }

    disabledChain(coin: string){
        if(coin == 'flux'){
            let dis = this.disabledFlux()
            if(dis) this.chains[0].checked = false
            return dis
        }
        
        return true
    }

    disabledFlux(){
        return !this.walletInput.startsWith('t1')
    }
}