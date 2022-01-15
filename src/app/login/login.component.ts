import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { LoginRequest } from '../_shared/models/requests/login.request';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginModel: LoginRequest = {
    email: '',
    password: ''
  }
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  message = '';
  login(): void {
    // this.authService.createUser(this.loginModel);
    this.authService.loginWithCredential(this.loginModel).then((response) => {
      (response)? this.router.navigate(['app/dashboard']) : this.message = 'Incorrect username or password';

      setTimeout(() => {
        this.message = '';
      }, 5000);
    });
  }
  
   //  TO CHECK IF NGMODEL INPUT OR FORM IS VALID OR HAS ERROR
   hasError(formControl: any): boolean {
    return formControl.invalid && (formControl.dirty || formControl.touched)
  }
}
