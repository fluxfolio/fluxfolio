import { Component, OnInit } from '@angular/core';

import { ProfileService } from '../../service/profile.service'

@Component({
    selector: 'flux-node-display',
    templateUrl: './flux-node-display.component.html',
    styleUrls: ['./flux-node-display.component.scss']
})

export class FluxNodeDisplayComponent implements OnInit {
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

    displayTime(militime :any){
        return new Date(militime*1000).toLocaleDateString()
    }

    displayNextPaid(rank :number){
        let allMinute = rank*2
        let dayInMinute = 60*24
        let nextDays = allMinute/dayInMinute
        return (nextDays | 0) + ' days, ' + ((nextDays%1)*24 | 0) + ' hrs '
    }
}