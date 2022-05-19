import { Component, OnInit } from '@angular/core';

import { ProfileService } from '../../service/profile.service'
import { UpdateService } from '../../service/update.service'

@Component({
    selector: 'index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})

export class IndexComponent implements OnInit {
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
        private updateService: UpdateService,
        private profileService: ProfileService
    ) {
        
    }

    ngOnInit() {
        this.profile = this.profileService.getAllProfile()
        this.profileActive = this.profileService.getProfileActive()
    }

    updateDataAll(){
        this.updateService.updateAll()
    }
}