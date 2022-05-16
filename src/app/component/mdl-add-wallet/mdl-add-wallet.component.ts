import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'mdl-add-wallet',
    templateUrl: './mdl-add-wallet.component.html',
    styleUrls: ['./mdl-add-wallet.component.scss']
})

export class MdlAddWalletComponent implements OnInit {
    chains = [
        { name: 'flux' }
    ]

    constructor(
        
    ) {
        console.log('constructor')
    }

    ngOnInit() {
        console.log('oninit')
    }

    validateForm(){
        
    }
}