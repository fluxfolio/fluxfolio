import { Component, OnInit } from '@angular/core';

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
        
    ) {
        
    }

    ngOnInit() {
        if(!localStorage.getItem('profile')) {
            localStorage.setItem('profile', JSON.stringify(this.profile));
            localStorage.setItem('profileActive', '0');
        }
    }

    profileActiveName(){
        this.profile = JSON.parse(localStorage.getItem('profile') || '{}')
        return this.profile.profile[0].name
    }

    chooseProfile(){
        
    }
}