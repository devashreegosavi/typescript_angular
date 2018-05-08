import { Directive , ElementRef, Renderer, HostBinding, OnInit, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appListingit]'
})
export class ListingitDirective {

  showdiv = false;  
  constructor(private el: ElementRef,
    private renderer: Renderer) { }

    @Input('appListingit')
  @HostListener('mouseenter')
  mouseIn() {
    this.showdiv = !this.showdiv;  
  }

  @HostListener('mouseleave')
  mouseOut() {
    this.showdiv = !this.showdiv;  
  }
}
