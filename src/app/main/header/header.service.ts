import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor() { }

  title = 'Title';

  setTitle(title: string): void {
    this.title = title;
  }

  getTitle(): string {
    return this.title;
  }
}
