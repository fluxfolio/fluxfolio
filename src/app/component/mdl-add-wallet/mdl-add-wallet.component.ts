import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { COINS } from '../../properties/constants'

import { ProfileService } from '../../service/profile.service'
import { UpdateService } from '../../service/update.service'

@Component({
    selector: 'mdl-add-wallet',
    templateUrl: './mdl-add-wallet.component.html',
    styleUrls: ['./mdl-add-wallet.component.scss']
})

export class MdlAddWalletComponent implements OnInit {
    @ViewChild('closeModal', { static: false }) closeModal: ElementRef<HTMLInputElement> = {} as ElementRef;

    chains = JSON.parse(JSON.stringify(COINS));

    walletInput = ''
    validateText = ''

    constructor(
        private profileService: ProfileService,
        private updateService: UpdateService
    ) {
        
    }

    ngOnInit() {
        
    }

    clearData(){
        this.walletInput = ''
        this.chains.forEach((element: { checked: boolean; }) => {
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
            this.walletInput = this.walletInput.trim()
            
            let profile = this.profileService.getAllProfile()
            let profileActive = this.profileService.getProfileActive()

            for(let chain of this.chains){
                if(chain.checked){
                    let found = false
                    for(let i = 0; i < profile.profile[profileActive].coin.length; i++) {
                        let coin = profile.profile[profileActive].coin[i]
                        if(coin.name == chain.name){
                            found = true
                            if(coin.wallet.indexOf(this.walletInput) === -1){
                                coin.wallet.push(this.walletInput)
                                coin.amount.push(0.00)
                            } 
                            else {
                                console.log('duplicate wallet')
                            }
                                
                            break
                        }
                    }
                    if(!found){
                        profile.profile[profileActive].coin.push({
                            name: chain.name,
                            wallet: [
                                this.walletInput
                            ],
                            amount: [
                                0.00
                            ],
                            node: []
                        })
                    }
                }
            }

            this.profileService.setAllProfile(profile)
            this.clearData()
            this.closeModal.nativeElement.click()
            this.updateService.updateAll()
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