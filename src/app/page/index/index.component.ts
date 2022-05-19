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
}