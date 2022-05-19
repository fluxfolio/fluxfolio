import { Component, OnInit } from '@angular/core';

import { ProfileService } from '../../../service/profile.service'

@Component({
    selector: 'portfolio-overview',
    templateUrl: './portfolio-overview.component.html',
    styleUrls: ['./portfolio-overview.component.scss']
})

export class PortfolioOverviewComponent implements OnInit {
    profile = {
        profile : [
            {
                name: '',
                coin: [{
                    name: '',
                    wallet: [],
                    amount: []
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
}