import { Injectable } from '@angular/core';

@Injectable()
export class ProfileService {
    initialProfile = {
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
}