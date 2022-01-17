import { Injectable } from '@angular/core';

import { collection, query, where, getDocs, getFirestore, getDoc, DocumentData, doc, setDoc } from 'firebase/firestore';
import { firebase } from './firebase.service';

import { RequestModel } from '../_shared/models/request.model';
import { DocumentModel } from '../_shared/models/document.model';

const db = getFirestore(firebase);

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor() { }

  async getRequests(): Promise<RequestModel[]> {
    const promise = new Promise<RequestModel[]>(async(resolve, reject) => {
      const q = query(collection(db, 'validationRequests'), where('validator', '==', sessionStorage.getItem('_uid')));
      const querySnapshot = await getDocs(q);
      const docs: RequestModel[] = [];
      querySnapshot.forEach(doc => {
        docs.push(JSON.parse(JSON.stringify(doc.data())));
      })
      resolve(docs)
    });
    return promise;
  }

  async getDocumentData(docId: string): Promise<DocumentModel> {
    const promise = new Promise<DocumentModel>(async (resolve) => {
      const docRef = doc(db, 'validationRequests', docId);
      const docSnap = await getDoc(docRef);
      resolve(JSON.parse(JSON.stringify(docSnap.data())))
    })
    return promise;
  }

  async returnValidation(documentData: DocumentModel): Promise<boolean> {
    documentData.returned = true;
    const promise = new Promise<boolean>(async (resolve, reject) => {
      await setDoc(doc(db, 'validationRequests', documentData.requestId), documentData).then(() => {
        resolve(true);
      }).catch(() => {
        reject(false);
      })
    })
    return promise;
  }
}
