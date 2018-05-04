import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appNavbardemo]'
})
export class NavbardemoDirective {


  constructor(private el: ElementRef) { }
 
  @Input() defaultColor: string;
 

  @Input('appNavbardemo') highlightColor: string;
 
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor || 'green');
  }
 
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
 
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
