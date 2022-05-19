import { Component, OnInit } from '@angular/core';

import { ProfileService } from '../../service/profile.service'

@Component({
    selector: 'setting',
    templateUrl: './setting.component.html',
    styleUrls: ['./setting.component.scss']
})

export class SettingComponent implements OnInit {
    isEdit = false
    profile = {
        profile : [
            {
                name: ''
            }
        ]
    }
    profileActive = 0
    imputName = ""

    constructor(
        private profileService: ProfileService
    ) {
        
    }

    get activeProfileName(): string {
        return this.profile.profile[this.profileActive].name
    }
    set activeProfileName(newName: string) {
        this.profile.profile[this.profileActive].name = newName
        localStorage.setItem('profile', JSON.stringify(this.profile));
    }

    ngOnInit() {
        this.profile = this.profileService.getAllProfile()
        this.profileActive = this.profileService.getProfileActive()
    }

    save() {
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