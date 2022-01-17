import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { RequestModel } from 'src/app/_shared/models/request.model';

@Component({
  selector: 'app-request-drawer',
  templateUrl: './request-drawer.component.html',
  styleUrls: ['./request-drawer.component.scss']
})
export class RequestDrawerComponent implements OnInit, AfterViewInit {

  constructor(
    private requestService: RequestService
  ) { }


  ngOnInit(): void {
  }

  filterBy = 'new';
  ngAfterViewInit(): void {
    (this.filterBy === 'new')? this.getData(false) : this.getData(true);
  }

  requestList: RequestModel[] = [];
  loading = true;
  getData(filter: boolean): void {
    this.requestService.getRequests().then((response) => {
      this.requestList = response.filter((response) => response.returned === filter);
      this.loading = false;
    })
  }

  filter(status: string): void {
    this.filterBy = status;
    this.loading = true;
    this.ngAfterViewInit();
  }
}
