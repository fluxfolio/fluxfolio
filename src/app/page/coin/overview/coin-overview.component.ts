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
        for(let i = 0; i < this.profile.profile[this.profileActive].coin.length; i++){
            if(this.profile.profile[this.profileActive].coin[i].name == coin){
                return this.profile.profile[this.profileActive].coin[i].wallet
            }
        }

        return []
    }
}