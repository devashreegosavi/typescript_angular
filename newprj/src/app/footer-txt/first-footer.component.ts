import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-footer',
  template: `
    User Name : <input [type]="'U'">
  `,
  styles: []
})
export class FirstFooterComponent implements OnInit {

  U="text"
  constructor() { }

  ngOnInit() {
  }

}
