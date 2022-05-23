import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

// layout
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';
import { NavbarComponent } from './layouts/navbar/navbar.component'
import { FooterComponent } from './layouts/footer/footer.component'

// component
import { MdlAddWalletComponent } from './component/mdl-add-wallet/mdl-add-wallet.component'
import { FluxNodeDisplayComponent } from './component/flux-node-display/flux-node-display.component'
import { DataLastUpdateComponent } from './component/data-last-update/data-last-update.component'

// index
import { IndexComponent } from './page/index/index.component'

// portfolio
import { PortfolioOverviewComponent } from './page/portfolio/overview/portfolio-overview.component'

// coin
import { CoinOverviewComponent } from './page/coin/overview/coin-overview.component'
import { CoinFluxComponent } from './page/coin/flux/coin-flux.component'

// node
import { NodeDashboardComponent } from './page/node/dashboard/node-dashboard.component'

// setting
import { SettingComponent } from './page/setting/setting.component'

// service
import { UpdateService } from './service/update.service'
import { FluxService } from './service/flux.service'
import { ProfileService } from './service/profile.service'

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
    MdlAddWalletComponent,
    SettingComponent,
    CoinOverviewComponent,
    FluxNodeDisplayComponent,
    DataLastUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    UpdateService,
    FluxService,
    ProfileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
