import { Injectable } from '@angular/core';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { LoginModel } from '../_shared/models/login-model';
import { firebase } from './firebase.service';

const app = firebase;
const auth = getAuth()

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuthenticated(): boolean {
    return !!sessionStorage.getItem('_uid');
  }

  async signInWithPassword(login: LoginModel): Promise<boolean> {
    const response = new Promise<boolean>((resolve, reject) => {
      signInWithEmailAndPassword(auth, login.email, login.password).then((userCredentials) => {
        const user = userCredentials.user;
        sessionStorage.setItem('_uid', JSON.parse(JSON.stringify(user.uid)));
        resolve(true);
      }).catch((error) => {
        reject(false)
      })
    })
    return response;
  }

  async logout(): Promise<boolean> {
    const promise = new Promise<boolean>((resolve, reject) => {
      signOut(auth).then(() => {
        sessionStorage.clear();
        resolve(true);
      }).catch((error) => {
        console.log(error.message)
        reject(false);
      })
    })
    return true;
  }
}
