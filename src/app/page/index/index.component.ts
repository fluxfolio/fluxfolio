import { Component, OnInit } from '@angular/core';

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
        private updateService: UpdateService
    ) {
        
    }

    ngOnInit() {
        this.profile = JSON.parse(localStorage.getItem('profile') || '{}')
        this.profileActive = JSON.parse(localStorage.getItem('profileActive') || '{}')
    }

    updateDataAll(){
        this.updateService.updateAll()
    }
}