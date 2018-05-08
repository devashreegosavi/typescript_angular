import { Directive, ElementRef, Renderer2, HostBinding, OnInit, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[ckSizer]'
})
export class SizeMakerDirective {

  @HostBinding('style.border')
  rdBrd : string;

  @Input('ckSizer')
  @HostBinding('style.width')
  sz : string
  constructor() { }

  
  ngOnInit(): void {
    this.rdBrd = '1px solid red'
    //this.sz = '300px'
  }

  @HostListener('mouseenter')
  mouseIn() {
    this.sz = '350px'
    this.rdBrd = '3px solid green'
   // window.alert("hover")
  }

  @HostListener('mouseleave')
  mouseOut() {
    this.sz = '300px'
    this.rdBrd = '3px solid blue'
    //window.alert("hover");
  }
}
