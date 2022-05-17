import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'mdl-add-wallet',
    templateUrl: './mdl-add-wallet.component.html',
    styleUrls: ['./mdl-add-wallet.component.scss']
})

export class MdlAddWalletComponent implements OnInit {
    @ViewChild('closeModal', { static: false }) closeModal: ElementRef<HTMLInputElement> = {} as ElementRef;


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

    addWallet(){
        let chainChecked = false
        for(let chain of this.chains){
            if(chain.checked){
                chainChecked = true
                break
            }
        }
        if(this.walletInput && chainChecked){
            let profile = JSON.parse(localStorage.getItem('profile') || '{}')
            let profileActive = JSON.parse(localStorage.getItem('profileActive') || '{}')

            for(let chain of this.chains){
                if(chain.checked){
                    let found = false
                    for(let i = 0; i < profile.profile[profileActive].coin.length; i++) {
                        let coin = profile.profile[profileActive].coin[i]
                        if(coin.name == chain.name){
                            found = true
                            profile.profile[profileActive].coin[i].wallet.indexOf(this.walletInput) === -1 ?
                                profile.profile[profileActive].coin[i].wallet.push(this.walletInput) : 
                                console.log('duplicate wallet')
                            break
                        }
                    }
                    if(!found){
                        profile.profile[profileActive].coin.push({
                            name: chain.name,
                            wallet: [
                                this.walletInput
                            ]
                        })
                    }
                }
            }

            localStorage.setItem('profile', JSON.stringify(profile));

            this.clearData()
            this.closeModal.nativeElement.click()
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