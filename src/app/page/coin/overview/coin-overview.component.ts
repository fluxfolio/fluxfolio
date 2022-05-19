import { Component, OnInit } from '@angular/core';

import { COINS } from '../../../properties/constants'

import { ProfileService } from '../../../service/profile.service'

@Component({
    selector: 'coin-overview',
    templateUrl: './coin-overview.component.html',
    styleUrls: ['./coin-overview.component.scss']
})

export class CoinOverviewComponent implements OnInit {

    coins = JSON.parse(JSON.stringify(COINS));

    profile = {
        profile : [
            {
                name: '',
                coin: [{
                    name: '',
                    wallet: []
                }]
            }
        ]
    }
    profileActive = 0

    constructor(
        private profileService: ProfileService
    ) {
        
    }

    ngOnInit() {
        this.profile = this.profileService.getAllProfile()
        this.profileActive = this.profileService.getProfileActive()
    }

    getWallet(coin: string){
        let profileAc = this.profile.profile[this.profileActive]
        for(let i = 0; i < profileAc.coin.length; i++){
            if(profileAc.coin[i].name == coin){
                return profileAc.coin[i].wallet
            }
        }

        return []
    }
}