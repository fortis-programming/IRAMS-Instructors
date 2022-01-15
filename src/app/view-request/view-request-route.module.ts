import { Routes } from "@angular/router";
import { ViewRequestComponent } from "./view-request.component";

export const routes: Routes = [
  {
    path: 'p/:id',
    component: ViewRequestComponent
  }
]