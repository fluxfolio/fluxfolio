import { Component, OnInit } from '@angular/core';

import { ProfileService } from '../../service/profile.service'

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
    profile = {
        profile : [
            {
                name: 'default profile',
                coin: [
                    
                ]
            }
        ]
    }

    constructor(
        private profileService: ProfileService
    ) {
        
    }

    ngOnInit() {
        this.profile = this.profileService.getAllProfile()
    }

    profileActiveName(){
        return this.profileService.getProfileActiveName()
    }

    chooseProfile(){
        
    }
}