import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// ROUTES
import { route as LoginRoute } from '../app/login/login-routing.module'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'app',
    pathMatch: 'full'
  },
  ...LoginRoute,
  {
    path: 'app',
    loadChildren: () => import('./main/main.module').then(m => m.MainModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
