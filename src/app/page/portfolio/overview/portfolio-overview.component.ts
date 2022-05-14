import { Component, OnInit } from '@angular/core';

import { ProfileService } from '../../../service/profile.service'

@Component({
    selector: 'portfolio-overview',
    templateUrl: './portfolio-overview.component.html',
    styleUrls: ['./portfolio-overview.component.scss']
})

export class PortfolioOverviewComponent implements OnInit {    
    constructor(
        private profileService: ProfileService
    ) {
        
    }

    ngOnInit() {
        
    }

    getProfileActiveData() {
        return this.profileService.getProfileActiveDate()
    }
}