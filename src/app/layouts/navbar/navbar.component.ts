import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { ProfileService } from '../../service/profile.service'

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
    @ViewChild('cancelButton', { static: false }) cancelButton: ElementRef<HTMLInputElement> = {} as ElementRef;

    newProfileName = ""
    profileNameIsExist = false

    constructor(
        private profileService: ProfileService
    ) {
        
    }

    get profileList() {
        return this.profileService.getAllProfile().profile
    }

    get profileActiveName(){
        return this.profileService.getProfileActiveName()
    }

    ngOnInit() {
        
    }

    chooseProfile(profileIndex: number){
        this.profileService.setProfileActive((profileIndex).toString())
    }

    newProfile(){
        let profile = this.profileService.getAllProfile()
        this.profileNameIsExist = profile.profile.find((it: any) => (it.name == this.newProfileName))

        if(this.profileNameIsExist) return

        profile.profile.push({
            name: this.newProfileName,
            coin: []
        })
        this.profileService.setAllProfile(profile)
        this.profileService.setProfileActive((profile.profile.length-1).toString())
        this.cancelButton.nativeElement.click()
    }

    cleanupNewProfile(){
        this.newProfileName = ""
        this.profileNameIsExist = false
    }
}