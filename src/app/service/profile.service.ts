import { Injectable } from '@angular/core';

declare function findCoinDataFromProfileActive(profile: any, coin: any): any

@Injectable()
export class ProfileService {
    private initialProfile = {
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

    clearAndInitialProfile(){
        this.setAllProfile(this.initialProfile)
        this.setProfileActive('0')
    }

    getAllProfile(){
        if(!localStorage.getItem('profile')) {
            this.setAllProfile(this.initialProfile)
            this.setProfileActive('0')
        }
        return JSON.parse(localStorage.getItem('profile') || '{}')
    }

    setAllProfile(profile: any){
        localStorage.setItem('profile', JSON.stringify(profile))
    }

    getProfileActiveDate(){
        return this.getAllProfile().profile[this.getProfileActive()]
    }

    getProfileActive(){
        return +JSON.parse(localStorage.getItem('profileActive') || '{}')
    }

    setProfileActive(activeIdx: string){
        localStorage.setItem('profileActive', activeIdx);
    }

    getProfileActiveName(){
        let profile = this.getAllProfile()
        return profile.profile[this.getProfileActive()].name
    }

    getProfileActiveLastUpdate(){
        let profile = this.getAllProfile()
        return profile.profile[this.getProfileActive()].lastupd
    }

    getProfileFluxNode(){
        let profileActiveData = this.getProfileActiveDate()
        return findCoinDataFromProfileActive(profileActiveData, 'flux')[0]
    }
}