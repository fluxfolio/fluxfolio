import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';

import { IndexComponent } from './page/index/index.component'

import { PortfolioOverviewComponent } from './page/portfolio/overview/portfolio-overview.component'

import { CoinFluxComponent } from './page/coin/flux/coin-flux.component'

import { NodeDashboardComponent } from './page/node/dashboard/node-dashboard.component'

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
        component: CoinFluxComponent
      },
      {
        path: 'node',
        component: NodeDashboardComponent
      },
      {
        path: 'setting',
        component: SettingComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
