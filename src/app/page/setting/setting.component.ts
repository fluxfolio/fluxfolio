import { Component, OnInit } from '@angular/core';

import { ProfileService } from '../../service/profile.service'

@Component({
    selector: 'setting',
    templateUrl: './setting.component.html',
    styleUrls: ['./setting.component.scss']
})

export class SettingComponent implements OnInit {
    isEdit = false
    imputName = ""

    constructor(
        private profileService: ProfileService
    ) {
        
    }

    get activeProfileName(): string {
        return this.profileService.getProfileActiveDate().name
    }
    set activeProfileName(newName: string) {
        let profile = this.profileService.getAllProfile()
        profile.profile[this.profileService.getProfileActive()].name = newName
        this.profileService.setAllProfile(profile)
    }

    ngOnInit() {
        
    }

    save() {
        if(!this.imputName) return
        
        this.activeProfileName = this.imputName
        this.toggleEdit()
    }

    editClick() {
        this.imputName = this.activeProfileName
        this.toggleEdit()
    }

    toggleEdit() {
        this.isEdit = !this.isEdit
    }
}