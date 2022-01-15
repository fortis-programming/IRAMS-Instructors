import { Injectable } from '@angular/core';
import { database } from './firebase.service';
import { ref, get, child } from "firebase/database";
import { SenderModel } from '../_shared/models/sender.model';

const dbRef = ref(database);

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  async getUserData(uid: string): Promise<SenderModel> {
    let user: SenderModel = {
      name: '',
      photoUrl: ''
    };
    
    await get(child(dbRef, 'usersData/' + uid)).then((snapshot) => {
      if (snapshot.exists()) {
        const userData = {
          name: [JSON.parse(JSON.stringify(snapshot.val()))][0]['name'],
          photoUrl: [JSON.parse(JSON.stringify(snapshot.val()))][0]['photoUrl']
        }
        user = userData;
      }
    });
    return user;
  }
}
