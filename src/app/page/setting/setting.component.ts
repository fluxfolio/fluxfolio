import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { ProfileService } from '../../service/profile.service'

@Component({
    selector: 'setting',
    templateUrl: './setting.component.html',
    styleUrls: ['./setting.component.scss']
})

export class SettingComponent implements OnInit {
    @ViewChild('closeDelProfileModal', { static: false }) closeDelProfileModal: ElementRef<HTMLInputElement> = {} as ElementRef;
    @ViewChild('closeDelWalletModal', { static: false }) closeDelWalletModal: ElementRef<HTMLInputElement> = {} as ElementRef;

    isEdit = false
    imputName = ""

    delProfileId = 0
    delWalletProfileId = 0
    delWalletId = 0

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

    getAllProfile(){
        return this.profileService.getAllProfile()
    }

    convertTimeToLocalDateTime(time: any){
        if(time){
            return new Date(time).toLocaleString()
        }
        
        return '-'
    }

    isAccountActive(i: number){
        return i == this.profileService.getProfileActive()
    }

    clickDeleteProfile(i: number){
        this.delProfileId = i
    }

    deleteProfile(){
        let allProfile = this.profileService.getAllProfile()
        allProfile.profile.splice(this.delProfileId, 1)

        let activeProfile = this.profileService.getProfileActive()
        if(activeProfile > this.delProfileId){
            activeProfile = activeProfile - 1
            this.profileService.setProfileActive(activeProfile + '')
        }

        this.profileService.setAllProfile(allProfile)
        
        this.closeDelProfileModal.nativeElement.click()
    }

    clickDeleteWallet(i: number, j: number){
        this.delWalletProfileId = i
        this.delWalletId = j
    }

    deleteWallet(){
        this.closeDelWalletModal.nativeElement.click()
    }
}