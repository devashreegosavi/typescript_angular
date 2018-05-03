import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-txt',
  templateUrl: './footer-txt.component.html',
  styleUrls: ['./footer-txt.component.css']
})
export class FooterTxtComponent implements OnInit {

  status  = `Users Visited : `
  dt : string
  constructor() { }

  ngOnInit() {
  }
  btnClk() {
    this.dt = new Date().toString()
  }

}
