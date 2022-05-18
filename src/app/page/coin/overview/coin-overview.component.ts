import { Component, OnInit } from '@angular/core';

import { COINS } from '../../../properties/constants'

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
        
    ) {
        
    }

    ngOnInit() {
        this.profile = JSON.parse(localStorage.getItem('profile') || '{}')
        this.profileActive = JSON.parse(localStorage.getItem('profileActive') || '{}')
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