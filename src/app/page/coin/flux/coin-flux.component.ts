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
    @BlockUI('blockCalculationSupply') blockCalculationSupply !: NgBlockUI;

    cumulusNode = 0
    nimbusNode = 0
    stratusNode = 0

    cumulusCollateral = 1000
    nimbusCollateral = 12500
    stratusCollateral = 40000

    maxSupply = 440000000
    calculationSupply = 0

    constructor(
        private fluxService: FluxService
    ) {
        
    }

    ngOnInit() {
        this.callNodeCount()
        this.callCalculatingSupply()
    }

    async callNodeCount(){
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

    getFrequency(node: number){
        let allMinute = node*2
        let dayInMinute = 60*24
        let nextDays = allMinute/dayInMinute
        return (nextDays | 0) + ' days ' + ((nextDays%1)*24 | 0) + ' hrs '
    }

    async callCalculatingSupply(){
        this.blockCalculationSupply.start()

        this.calculationSupply = await this.fluxService.getCalculationSupply()

        this.blockCalculationSupply.stop()
    }

    getLockedSupply(){
        return this.cumulusNode*this.cumulusCollateral
            + this.nimbusNode*this.nimbusCollateral
            + this.stratusNode*this.stratusCollateral
    }

    getTokenPercentag(num: number){
        return (num/this.maxSupply*100).toFixed(1) + '%'
    }
}