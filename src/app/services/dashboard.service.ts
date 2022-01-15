import { Injectable } from '@angular/core';
import { onSnapshot, query, collection, doc, setDoc } from 'firebase/firestore';
import { firestore } from '../services/firebase.service';
import { DocumentModel } from '../_shared/models/document.model';
import { RequestItem } from '../_shared/models/request-item.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  async getRequest(): Promise<RequestItem[]> {
    const response = new Promise<RequestItem[]>((resolve) => {
      let requestItems: RequestItem[] = [];
      requestItems = [];
      const q = query(collection(firestore, 'validationRequests',));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        snapshot.forEach((docData) => {
          if ([docData.data()][0]['validator'] === sessionStorage.getItem('_uid')) {

            const item = {
              requestId: docData.id,
              title: [docData.data()][0]['title'],
              message: [docData.data()][0]['message'],
              sender: [docData.data()][0]['sender'],
              projectId: [docData.data()][0]['projectId']
            }
            requestItems.push(JSON.parse(JSON.stringify(item)));
          }
        });
      });
      resolve(requestItems)
    });
    return response;
  }

  document: DocumentModel = {
    validator: '',
    message: '',
    metaData: '',
    sender: '',
    type: '',
    members: [],
    comments: [],
    status: '',
  }
  geDocumentData(docId: string): Promise<DocumentModel> {
    const response = new Promise<DocumentModel>((resolve) => {
      onSnapshot(doc(firestore, 'validationRequests', docId), (doc) => {
        this.document = JSON.parse(JSON.stringify(doc.data()));
        resolve(this.document);
      });
    });
    return response;
  }

  getDocumentArray(): DocumentModel {
    return this.document;
  }

  async returnEvaluation(docId: string, validation: DocumentModel): Promise<void> {
    console.log(validation)
    const ref = doc(firestore, 'validationRequests', docId);
    await setDoc(ref, validation);
  }
}
