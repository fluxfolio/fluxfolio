import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { ProfileService } from '../../service/profile.service'
import { UpdateService } from '../../service/update.service'

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
    @ViewChild('cancelButton', { static: false }) cancelButton: ElementRef<HTMLInputElement> = {} as ElementRef;

    newProfileName = ""
    profileNameIsExist = false

    updateDataEveryTime = 1000*60*17

    constructor(
        private profileService: ProfileService,
        private updateService: UpdateService
    ) {
        
    }

    get profileList() {
        return this.profileService.getAllProfile().profile
    }

    get profileActiveName(){
        return this.profileService.getProfileActiveName()
    }

    get profileActiveIndex(){
        return this.profileService.getProfileActive()
    }

    ngOnInit() {
        this.updateDate()
    }

    updateDate(){
        this.updateService.checkAndUpdate()

        setTimeout(()=> {
            this.updateDate()
        }, this.updateDataEveryTime)
    }

    chooseProfile(profileIndex: number){
        this.profileService.setProfileActive((profileIndex).toString())
        this.updateService.checkAndUpdate()
    }

    newProfile(){
        if(!this.newProfileName) return

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