import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { UserModel } from '../_shared/models/user.model';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent implements OnInit {

  constructor(
    private userService: UserService
  ) { }

  user: UserModel = {
    name: '',
    photoUrl: ''
  }
  
  userId = '';
  loading = true;
  ngOnInit(): void {
    this.userId = JSON.parse(JSON.stringify(sessionStorage.getItem('_uid')));
    this.userService.getUserData(JSON.parse(JSON.stringify(sessionStorage.getItem('_uid')))).then((response) => {
      this.user = response;
      this.loading = false;
    })
  }
}
