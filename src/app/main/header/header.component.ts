import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { SenderModel } from 'src/app/_shared/models/sender.model';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private headerService: HeaderService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getTitle(): string {
    return this.headerService.getTitle();
  }

  user: SenderModel = {
    name:'',
    photoUrl: ''
  }
  getUser(): void {
    const uid = JSON.parse(JSON.stringify(sessionStorage.getItem('_uid')));
    this.userService.getUserData(uid).then((response) => {
      this.user = response;
    })
  }
}
