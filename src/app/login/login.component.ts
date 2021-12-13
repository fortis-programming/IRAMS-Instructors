import { Component, OnInit } from '@angular/core';
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
  constructor() { }

  ngOnInit(): void {
  }
  
   //  TO CHECK IF NGMODEL INPUT OR FORM IS VALID OR HAS ERROR
   hasError(formControl: any): boolean {
    return formControl.invalid && (formControl.dirty || formControl.touched)
  }
}
