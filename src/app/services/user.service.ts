import { Injectable } from '@angular/core';

import { getDatabase, ref, onValue } from 'firebase/database';
import { UserModel } from '../_shared/models/user.model';
import { firebase } from './firebase.service';

const db = getDatabase(firebase);

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  async getUserData(uid: string): Promise<UserModel> {
    const response = new Promise<UserModel>((resolve) => {
      const userReference = ref(db, 'usersData/' + uid);
      onValue(userReference, (snapshot) => {
        let user: UserModel = {
          name: '',
          photoUrl: ''
        }
        const data = snapshot.val();
        user.name = data['name'];
        user.photoUrl = data['photoUrl'];
        resolve(user);
      })
    })
    return response;
  }
}
