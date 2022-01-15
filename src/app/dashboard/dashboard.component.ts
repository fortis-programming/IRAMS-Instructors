import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HeaderService } from '../main/header/header.service';
import { DashboardService } from '../services/dashboard.service';
import { RequestItem } from '../_shared/models/request-item.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  requestItems: RequestItem[] = [];
  constructor(
    private dashboardService: DashboardService,
    private headerService: HeaderService
  ) { }
  
  ngOnInit(): void {
    this.headerService.setTitle('Dashboard');
  }

  ngAfterViewInit(): void {
    this.getData();  
  }

  loading = true;
  empty = false;
  getData(): void {
    this.dashboardService.getRequest().then((data) => {
      this.requestItems = data;
      setTimeout(() => {
        this.loading = false;
        (this.requestItems.length === 0)? this.empty = true : this.empty = false;
      }, 1000);
    })
  }
}
