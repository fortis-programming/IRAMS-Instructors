import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { RequestService } from 'src/app/services/request.service';
import { UserService } from 'src/app/services/user.service';
import { DocumentModel } from 'src/app/_shared/models/document.model';
import { UserModel } from 'src/app/_shared/models/user.model';

@Component({
  selector: 'app-request-preview',
  templateUrl: './request-preview.component.html',
  styleUrls: ['./request-preview.component.scss']
})
export class RequestPreviewComponent implements OnInit, AfterViewInit {
  @ViewChild('editor') ckEditor: any;

  constructor(
    private requestService: RequestService,
    private route: ActivatedRoute,
    private userService: UserService,
    private toast: ToastrService,
    private router: Router
  ) { }

  docId = '';
  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.docId = param['id'];
    })
  }

  ngAfterViewInit(): void {
    this.getDocumentData();
  }

  changeReturnStatus(status: string): void {
    this.document.status = status;
  }

  document: DocumentModel = {
    comments: [],
    date: new Date(),
    members: [],
    message: '',
    metaData: '',
    requestId: '',
    sender: '',
    status: '',
    type: '',
    validator: '',
    returned: false,
    title: ''
  }

  loading = false;
  getDocumentData(): void {
    this.loading = true;
    this.requestService.getDocumentData(this.docId).then((response) => {
      this.document = JSON.parse(JSON.stringify(response));
      this.getUserData();
      this.loading = false;
    })
  }

  sender: UserModel = {
    name: '',
    photoUrl: ''
  }
  
  getUserData(): void {
    this.userService.getUserData(this.document.sender).then((response) => {
      this.sender = response;
    })
  }

  @ViewChild('comment') commentEditor: any;
  returnRequest(): void {
    this.requestService.returnValidation(this.document).then((response) => {
      this.toast.success('Validation completed');
      this.router.navigate(['requests'])
    }).catch((error) => {
      console.log(error);
    })
  }
}
