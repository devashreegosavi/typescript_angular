import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-inner',
  template: `
    <p>
      second-inner works!
    </p>
  `,
  styles: []
})
export class SecondInnerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
