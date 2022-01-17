import { Component, Input, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { RequestModel } from 'src/app/_shared/models/request.model';
import { UserModel } from 'src/app/_shared/models/user.model';

@Component({
  selector: 'app-request-item',
  templateUrl: './request-item.component.html',
  styleUrls: ['./request-item.component.scss']
})
export class RequestItemComponent implements OnInit {
  @Input() item: RequestModel = {
    requestId: '',
    sender: '',
    message: '',
    date: new Date,
    returned: false
  }
  constructor(
    private userService: UserService
  ) { }
  
  sender: UserModel = {
    name: '',
    photoUrl: ''
  }
  ngOnInit(): void {
    this.userService.getUserData(this.item.sender).then((response) => {
      this.sender = response;
    })
  }

}
