import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MainRoutingModule } from './main-routing.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MainComponent } from './main.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    MainComponent,
    SidenavComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    RouterModule
  ]
})
export class MainModule { }
