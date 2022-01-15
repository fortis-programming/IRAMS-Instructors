import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { RequestItem } from 'src/app/_shared/models/request-item.model';
import { SenderModel } from 'src/app/_shared/models/sender.model';

@Component({
  selector: 'app-dashboard-item',
  templateUrl: './dashboard-item.component.html',
  styleUrls: ['./dashboard-item.component.scss']
})
export class DashboardItemComponent implements OnInit {
  @Input() request: RequestItem = {
    requestId: '',
    title: '',
    sender: '',
    message: '',
    projectId: ''
  }
  constructor(
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getSenderData();
  }
  
  openRequest(requestId: string): void {
    this.router.navigate(['./app/p/', this.request.requestId])
  }

  senderData: SenderModel = {
    name: '',
    photoUrl: ''
  }
  
  getSenderData(): void {
    this.userService.getUserData(this.request.sender).then((response) => {
      this.senderData = response;
    })
  }
}
