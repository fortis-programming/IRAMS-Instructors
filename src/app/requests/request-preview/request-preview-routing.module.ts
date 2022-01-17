import { Routes } from "@angular/router";
import { RequestPreviewComponent } from "./request-preview.component";

export const route: Routes = [
  {
    path: 'view/:id',
    component: RequestPreviewComponent
  }
]