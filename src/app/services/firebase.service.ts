import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app'; 
import { firebaseConfig } from 'src/environments/environment';
import { getDatabase } from 'firebase/database'
import { getFirestore } from 'firebase/firestore'

export const firebaseApp = initializeApp(firebaseConfig);
export const firestore = getFirestore(firebaseApp);
export const database = getDatabase(firebaseApp);

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {
  constructor() { }
}
