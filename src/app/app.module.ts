import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';
import { NavbarComponent } from './layouts/navbar/navbar.component'
import { FooterComponent } from './layouts/footer/footer.component'

import { MdlAddWalletComponent } from './component/mdl-add-wallet/mdl-add-wallet.component'

import { IndexComponent } from './page/index/index.component'

import { PortfolioOverviewComponent } from './page/portfolio/overview/portfolio-overview.component'

import { CoinFluxComponent } from './page/coin/flux/coin-flux.component'

import { NodeDashboardComponent } from './page/node/dashboard/node-dashboard.component'

@NgModule({
  declarations: [
    AppComponent,
    ContentLayoutComponent,
    NavbarComponent,
    FooterComponent,
    IndexComponent,
    PortfolioOverviewComponent,
    CoinFluxComponent,
    NodeDashboardComponent,
    MdlAddWalletComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
