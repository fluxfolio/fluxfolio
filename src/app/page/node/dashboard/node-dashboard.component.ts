import { Component, OnInit } from '@angular/core';

import { ProfileService } from '../../../service/profile.service'

@Component({
    selector: 'node-dashboard',
    templateUrl: './node-dashboard.component.html',
    styleUrls: ['./node-dashboard.component.scss']
})

export class NodeDashboardComponent implements OnInit {
    constructor(
        private profileService: ProfileService
    ) {
        
    }

    ngOnInit() {
        
    }

    getProfileFluxNode() :any {
        let fluxNode = this.profileService.getProfileFluxNode()
        if(fluxNode){
            return fluxNode
        }
        return {
            node: []
        }
    }
}