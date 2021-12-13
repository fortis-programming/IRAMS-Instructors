import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { routes as DashboardRoute } from '../dashboard/dashboard-route.module';
import { routes as PreviewRoute } from '../view-request/view-request-route.module';

import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      ...DashboardRoute,
      ...PreviewRoute
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class MainRoutingModule { }
