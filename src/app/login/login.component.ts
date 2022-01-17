import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { LoginModel } from '../_shared/models/login-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginRequest: LoginModel = {
    email: '',
    password: ''
  }

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  hasError(formControl: any): boolean {
    return formControl.invalid && (formControl.dirty || formControl.touched);
  }

  messageVisible = false;
  loading = false;
  loginWithCredentials(): void {
    this.loading = true;
    this.authService.signInWithPassword(this.loginRequest).then((response) => {
      this.router.navigate(['app']);
      this.loading = false;
    }).catch(() => {
      this.messageVisible = true;
      this.loading = false;
    })
  }

}
