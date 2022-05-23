import { Injectable } from '@angular/core';

import { ProfileService } from './profile.service'
import { FluxService } from './flux.service'

@Injectable()
export class UpdateService {
    constructor(
        private fluxService: FluxService,
        private profileService: ProfileService
    ) {

    }

    async updateAll(){
        let profile = this.profileService.getAllProfile()
        let profileActive = this.profileService.getProfileActive()

        for(let i = 0; i < profile.profile[profileActive].coin.length; i++) {
            let element = profile.profile[profileActive].coin[i]
            if(element.name == 'flux'){
                await this.fluxService.updateAll(element)
            }
        };

        profile.profile[profileActive].lastupd = new Date().getTime()
        this.profileService.setAllProfile(profile)
    }

    checkAndUpdate(){
        let periodTime = 1000*60*16
        let nowTime = new Date().getTime()
        let lastupd = this.profileService.getProfileActiveLastUpdate()
        if(lastupd){
            if((lastupd+periodTime) < nowTime){
                this.updateAll()
            }
        }
        else{
            this.updateAll()
        }
    }
}