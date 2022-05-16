import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
    profileActiveName = ''
    profile = {
        profile : [
            {
                name: 'default profile'
            }
        ]
    }

    constructor(
        
    ) {
        
    }

    ngOnInit() {
        if(!localStorage.getItem('profile')) {
            localStorage.setItem('profile', JSON.stringify(this.profile));
            localStorage.setItem('profileActive', '0');

            this.profileActiveName = this.profile.profile[0].name
        }
        else {
            this.profile = JSON.parse(localStorage.getItem('profile') || '{}')
            this.profileActiveName = this.profile.profile[0].name
        }
    }

    chooseProfile(){
        
    }
}