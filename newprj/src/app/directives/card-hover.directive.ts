import { Directive ,Component,  Renderer,
  HostListener,
  HostBinding,
  ElementRef} from '@angular/core';

@Directive({
  selector: '[appCardHover]'
})
export class CardHoverDirective {

  @HostBinding('class.card-outline-primary')private ishovering: boolean;
  constructor(private el: ElementRef,
    private renderer: Renderer) { 
      renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'gray');

      
    }

    @HostListener('mouseover') onMouseOver() {
     // let part = this.el.nativeElement.querySelector('.card-text');
      this.renderer.setElementStyle(this.el.nativeElement, 'display', 'block');
      this.ishovering = true;

      /*const pEleOne = this.renderer.createElement(this.e1.nativeElement, "p");
      const pEleTwo = this.renderer.createElement(this.e1.nativeElement, "p");
      this.renderer.createText(pEleOne, "Element one");
      this.renderer.createText(pEleTwo, "Element two");
      this.renderer.projectNodes(this.e1.nativeElement, [pEleOne, pEleTwo]);*/
    }
  
    @HostListener('mouseout') onMouseOut() {
     // let part = this.el.nativeElement.querySelector('.card-text');
      this.renderer.setElementStyle(this.el.nativeElement, 'display', 'none');
      this.ishovering = false;
    }
}
