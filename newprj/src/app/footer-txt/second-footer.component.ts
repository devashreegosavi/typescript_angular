import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-footer',
  template: `
    Password : <input [type]="'P'">
  `,
  styles: []
})
export class SecondFooterComponent implements OnInit {

  P="password";
  constructor() { }

  ngOnInit() {
  }

}
