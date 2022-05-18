import { Injectable } from '@angular/core';

import { FluxService } from './flux.service'

@Injectable()
export class UpdateService {
    constructor(
        private fluxService: FluxService
    ) {

    }

    updateAll(){
        let profile = JSON.parse(localStorage.getItem('profile') || '{}')
        let profileActive = JSON.parse(localStorage.getItem('profileActive') || '{}')

        profile.profile[profileActive].coin.forEach((element: { name: string; }) => {
            if(element.name == 'flux'){
                this.fluxService.updateAll(element)
            }
        });
    }
}