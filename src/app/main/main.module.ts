import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';

import { MainComponent } from './main.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [MainComponent, SidenavComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    RouterModule
  ]
})
export class MainModule { }
