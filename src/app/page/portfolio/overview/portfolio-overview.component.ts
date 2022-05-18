import { Component, OnInit } from '@angular/core';

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
}