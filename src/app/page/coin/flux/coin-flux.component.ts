import { Component, OnInit } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

import { FluxService } from '../../../service/flux.service'

@Component({
    selector: 'coin-flux',
    templateUrl: './coin-flux.component.html',
    styleUrls: ['./coin-flux.component.scss']
})

export class CoinFluxComponent implements OnInit {
    @BlockUI('blockNodeDetail') blockNodeDetail !: NgBlockUI;

    cumulusNode = 0
    nimbusNode = 0
    stratusNode = 0

    constructor(
        private fluxService: FluxService
    ) {
        
    }

    ngOnInit() {
        this.getNodeCount()
    }

    async getNodeCount(){
        this.blockNodeDetail.start()

        let nodeCount = await this.fluxService.getNodeCount()

        this.cumulusNode = nodeCount['cumulus-enabled']
        this.nimbusNode = nodeCount['nimbus-enabled']
        this.stratusNode = nodeCount['stratus-enabled']

        this.blockNodeDetail.stop()
    }

    getNodeCountAll(){
        return this.cumulusNode + this.nimbusNode + this.stratusNode
    }

    getNodeCountPercentag(node: number){
        if(node == 0) return 0

        return (node/this.getNodeCountAll()*100).toFixed(1) + '%'
    }
}