import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Editor, toHTML, Toolbar } from 'ngx-editor';
import { DashboardService } from '../services/dashboard.service';
import { UserService } from '../services/user.service';
import { DocumentModel } from '../_shared/models/document.model';
import { SenderModel } from '../_shared/models/sender.model';

@Component({
  selector: 'app-view-request',
  templateUrl: './view-request.component.html',
  styleUrls: ['./view-request.component.scss']
})
export class ViewRequestComponent implements OnInit {
  html = '';
  comments = '';
  editor: Editor = new Editor();

  editor1: Editor = new Editor();

  toolbar: Toolbar = [
    ["bold", "italic"],
    ["underline", "strike"],
    ["text_color"],
  ];
  
  constructor(
    private router: Router,
    private dashboardService: DashboardService,
    private activatedRouter: ActivatedRoute,
    private userService: UserService
    ) { }

  docId = '';
  ngOnInit(): void {
    this.activatedRouter.params.subscribe(params => {
      this.docId = params['id'];
      this.getDocument(this.docId);
    });
  }

  document: DocumentModel = {
    validator: '',
    message: '',
    metaData: '',
    sender: '',
    type: '',
    members: [],
    comments: [],
    status: ''
  }

  loading = true;
  getDocument(docId: string) {
    this.loading = true;
    this.dashboardService.geDocumentData(docId).then((response) => {
      this.document = response;
      setTimeout(() => {
        this.loading = false;
        this.html = this.document.metaData;
        this.getMembersData();
        this.getSenderData();
      }, 1000)
    })
  }

  return(): void {
    this.document.metaData = this.html;
    this.dashboardService.returnEvaluation(this.docId, this.document);
    this.closePreview();
  }
  
  membersData: SenderModel[] = [];
  getMembersData(): void {
    this.document.members.forEach(member => {
      this.userService.getUserData(member).then((response) => {
        if (member === this.document.sender) {
          const human = {
            photoUrl: response.photoUrl,
            name: 'Sender'
          }
          this.membersData.push(human);
          return;
        }

        this.membersData.push(response);
      });
    })
  }

  senderData: SenderModel = {
    name: '',
    photoUrl: ''
  }
  getSenderData(): void {
    this.userService.getUserData(this.document.sender).then((response) => {
      this.senderData = response;
    });
    
  }

  closePreview(): void {
    this.router.navigate(['./app/dashboard']);
  }

}
