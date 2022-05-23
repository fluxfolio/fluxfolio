import { Component, OnInit } from '@angular/core';

import { ProfileService } from '../../service/profile.service'

@Component({
    selector: 'data-last-update',
    templateUrl: './data-last-update.component.html',
    styleUrls: ['./data-last-update.component.scss']
})

export class DataLastUpdateComponent implements OnInit {
    constructor(
        private profileService: ProfileService
    ) {
        
    }

    ngOnInit() {
        
    }

    getLastUpdateData(){
        return this.profileService.getProfileActiveLastUpdate()
    }
}