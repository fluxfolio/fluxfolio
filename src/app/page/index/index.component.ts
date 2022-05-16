import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})

export class IndexComponent implements OnInit {
    profile = {
        profile : [
            {
                name: ''
            }
        ]
    }

    constructor(
        
    ) {
        
    }

    ngOnInit() {
        this.profile = JSON.parse(localStorage.getItem('profile') || '{}')
    }
}