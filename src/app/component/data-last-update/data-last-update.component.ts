import { Component, OnInit } from '@angular/core';

import { ProfileService } from '../../service/profile.service'
import { UpdateService } from '../../service/update.service'

@Component({
    selector: 'data-last-update',
    templateUrl: './data-last-update.component.html',
    styleUrls: ['./data-last-update.component.scss']
})

export class DataLastUpdateComponent implements OnInit {
    constructor(
        private updateService: UpdateService,
        private profileService: ProfileService
    ) {
        
    }

    ngOnInit() {
        
    }

    getLastUpdateData(){
        let lastupd = this.profileService.getProfileActiveLastUpdate()
        if(lastupd){
            return new Date(lastupd).toLocaleString()
        }
        
        return '-'
    }

    updateDataAll(){
        this.updateService.updateAll()
    }
}