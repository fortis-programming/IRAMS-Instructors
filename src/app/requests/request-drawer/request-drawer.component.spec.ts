import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestDrawerComponent } from './request-drawer.component';

describe('RequestDrawerComponent', () => {
  let component: RequestDrawerComponent;
  let fixture: ComponentFixture<RequestDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestDrawerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
