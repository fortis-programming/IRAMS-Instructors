import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Editor, Toolbar } from 'ngx-editor';

@Component({
  selector: 'app-view-request',
  templateUrl: './view-request.component.html',
  styleUrls: ['./view-request.component.scss']
})
export class ViewRequestComponent implements OnInit {
  html = '';
  editor: Editor = new Editor();
  // toolbar: Toolbar = [
  //   ["bold", "italic"],
  //   ["underline", "strike"],
  //   ["ordered_list", "bullet_list"],
  //   [{ heading: ["h1", "h2", "h3", "h4", "h5", "h6"] }],
  //   ["link", "image"],
  //   ["text_color", "background_color"],
  //   ["align_left", "align_center", "align_right", "align_justify"]
  // ];
  
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  
  closePreview(): void {
    this.router.navigate(['./app/dashboard']);
  }

}
