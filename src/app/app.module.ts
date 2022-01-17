import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CKEditorModule } from 'ckeditor4-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RequestsComponent } from './requests/requests.component';
import { RequestItemComponent } from './requests/request-item/request-item.component';
import { RequestPreviewComponent } from './requests/request-preview/request-preview.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { RequestDrawerComponent } from './requests/request-drawer/request-drawer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RequestsComponent,
    RequestItemComponent,
    RequestPreviewComponent,
    AccountSettingsComponent,
    RequestDrawerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CKEditorModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
