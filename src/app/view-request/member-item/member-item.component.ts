import { Component, Input, OnInit } from '@angular/core';
import { SenderModel } from 'src/app/_shared/models/sender.model';

@Component({
  selector: 'app-member-item',
  templateUrl: './member-item.component.html',
  styleUrls: ['./member-item.component.scss']
})
export class MemberItemComponent implements OnInit {
  @Input() member: SenderModel = {
    name: '',
    photoUrl: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

}
