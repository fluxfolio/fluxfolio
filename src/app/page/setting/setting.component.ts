import { Component, OnInit } from '@angular/core';

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
        this.profile = JSON.parse(localStorage.getItem('profile') || '{}')
        this.profileActive = +JSON.parse(localStorage.getItem('profileActive') || "0")
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