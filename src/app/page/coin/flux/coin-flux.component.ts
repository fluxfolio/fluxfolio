import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'coin-flux',
    templateUrl: './coin-flux.component.html',
    styleUrls: ['./coin-flux.component.scss']
})

export class CoinFluxComponent implements OnInit {
    cumulusNode = 0
    nimbusNode = 0
    stratusNode = 0

    constructor(
        
    ) {
        
    }

    ngOnInit() {
        
    }

    getNodeCount(){
        
    }
}