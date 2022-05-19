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

    constructor(
        private profileService: ProfileService
    ) {
        
    }

    ngOnInit() {
        this.profileService.getAllProfile()
    }

    getWallet(coin: string){
        let profileActiveData = this.profileService.getProfileActiveDate()
        for(let i = 0; i < profileActiveData.coin.length; i++){
            if(profileActiveData.coin[i].name == coin){
                return profileActiveData.coin[i].wallet
            }
        }

        return []
    }
}