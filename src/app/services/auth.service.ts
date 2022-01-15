import { Injectable } from '@angular/core';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { firestore } from './firebase.service';

import { LoginRequest } from '../_shared/models/requests/login.request';

const firestoreInit = firestore;
const auth = getAuth();

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isAuthenticated() {
    return !!sessionStorage.getItem('_uid');
  }

  getSignInStatus(): boolean {
    let userStatus = false;
    onAuthStateChanged(auth, (user) => {
      if(user) {
        const uid = user.uid;
        console.log(uid);
        userStatus = true;
      } else {
        userStatus = false;
      }
    })
    console.log(userStatus)
    return userStatus;
  }

  createUser(loginData: LoginRequest): void {
    createUserWithEmailAndPassword(auth, loginData.email, loginData.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  async loginWithCredential(loginData: LoginRequest): Promise<boolean> {
    let response = false;
    await signInWithEmailAndPassword(auth, loginData.email, loginData.password).then((user) => {
      console.log('hi user');
      const uid = user.user.uid;
      sessionStorage.setItem('_uid', uid);
      response = true;
    }).catch((error) => {
      response = false;
    });
    return response;
  }

  logout(): void {

  }
}
