import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardItemComponent } from './dashboard/dashboard-item/dashboard-item.component';
import { ViewRequestComponent } from './view-request/view-request.component';
import { MemberItemComponent } from './view-request/member-item/member-item.component';
import { NgxEditorModule } from 'ngx-editor';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AuthGuardService } from './services/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    DashboardItemComponent,
    ViewRequestComponent,
    MemberItemComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    NgxEditorModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy}, AuthGuardService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
