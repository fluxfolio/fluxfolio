import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// layout
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';

// index
import { IndexComponent } from './page/index/index.component'

// portfolio
import { PortfolioOverviewComponent } from './page/portfolio/overview/portfolio-overview.component'

// coin
import { CoinOverviewComponent } from './page/coin/overview/coin-overview.component'
import { CoinFluxComponent } from './page/coin/flux/coin-flux.component'

// node
import { NodeDashboardComponent } from './page/node/dashboard/node-dashboard.component'

// support
import { SupportAboutUsComponent } from './page/support/about-us/support-about-us.component'

// setting
import { SettingComponent } from './page/setting/setting.component';

const routes: Routes = [
  {
    path: '',
    component: ContentLayoutComponent,
    children : [
      {
        path: '',
        component: IndexComponent
      },
      {
        path: 'portfolio',
        component: PortfolioOverviewComponent
      },
      {
        path: 'coin',
        component: CoinOverviewComponent
      },
      {
        path: 'coin/flux',
        component: CoinFluxComponent
      },
      {
        path: 'node',
        component: NodeDashboardComponent
      },
      {
        path: 'setting',
        component: SettingComponent
      },
      {
        path: 'about-us',
        component: SupportAboutUsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
