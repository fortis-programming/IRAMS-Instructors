import { Routes } from "@angular/router";
import { RequestsComponent } from "./requests.component";

import { route as ViewRouting } from '../requests/request-preview/request-preview-routing.module';
import { route as DrawerRouting } from "../requests/request-drawer/request-drawer-routing.module";

export const route: Routes = [
  {
    path: 'requests',
    component: RequestsComponent,
    children: [
      { path: '', redirectTo: 'list'},
      ...ViewRouting,
      ...DrawerRouting
    ]
  }
]