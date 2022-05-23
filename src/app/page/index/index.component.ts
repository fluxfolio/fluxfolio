import { Component, OnInit } from '@angular/core';

import { ProfileService } from '../../service/profile.service'

@Component({
    selector: 'index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})

export class IndexComponent implements OnInit {
    constructor(
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