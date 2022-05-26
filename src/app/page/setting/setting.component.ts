import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { ProfileService } from '../../service/profile.service'
import { UpdateService } from '../../service/update.service'

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
    delWalletCoinId = 0
    delWalletId = 0

    constructor(
        private profileService: ProfileService,
        private updateService: UpdateService
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

    clickDeleteWallet(i: number, j:number, k: number){
        this.delWalletProfileId = i
        this.delWalletCoinId = j
        this.delWalletId = k
    }

    deleteWallet(){
        let allProfile = this.profileService.getAllProfile()
        let profile = allProfile.profile[this.delWalletProfileId]
        let coin = profile.coin[this.delWalletCoinId]

        coin.wallet.splice(this.delWalletId, 1)
        coin.amount.splice(this.delWalletId, 1)

        this.profileService.setAllProfile(allProfile)
        this.updateService.updateAll()

        this.closeDelWalletModal.nativeElement.click()
    }
}