import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

import { route as RequestsRoute } from '../requests/requests-routing.module';
import { route as AccountRoute } from '../account-settings/account-settings-routing.module';
import { AuthGuardService } from '../services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'requests', pathMatch: 'full' },
      ...RequestsRoute,
      ...AccountRoute
    ],
    canActivate: [AuthGuardService]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MainRoutingModule { }
