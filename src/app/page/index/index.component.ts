import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})

export class IndexComponent implements OnInit {
    profile = {
        profile : [
            {
                name: ''
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