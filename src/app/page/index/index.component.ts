import { Component, OnInit } from '@angular/core';

import { ProfileService } from '../../service/profile.service'
import { UpdateService } from '../../service/update.service'

@Component({
    selector: 'index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})

export class IndexComponent implements OnInit {
    constructor(
        private updateService: UpdateService,
        private profileService: ProfileService
    ) {
        
    }

    ngOnInit() {
        
    }

    getProfileActiveData(){
        return this.profileService.getProfileActiveDate()
    }

    getProfileActiveName(){
        return this.profileService.getProfileActiveName()
    }

    updateDataAll(){
        this.updateService.updateAll()
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