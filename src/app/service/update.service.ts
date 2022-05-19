import { Injectable } from '@angular/core';

import { FluxService } from './flux.service'

@Injectable()
export class UpdateService {
    constructor(
        private fluxService: FluxService
    ) {

    }

    async updateAll(){
        let profile = JSON.parse(localStorage.getItem('profile') || '{}')
        let profileActive = JSON.parse(localStorage.getItem('profileActive') || '{}')

        for(let i = 0; i < profile.profile[profileActive].coin.length; i++) {
            let element = profile.profile[profileActive].coin[i]
            if(element.name == 'flux'){
                await this.fluxService.updateAll(element)
            }
        };

        localStorage.setItem('profile', JSON.stringify(profile))
    }
}