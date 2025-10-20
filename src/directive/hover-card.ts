import { Directive, ElementRef,  HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverCard]'
})
export class HoverCard {

 constructor(private el: ElementRef) {
}
@HostListener('mouseenter') onMouseEnter(){
  this.el.nativeElement.style.transform='scale(1.1)';
  this.el.nativeElement.style.transition='transform 0.3s ease-in-out';
}

@HostListener('mouseleave') onMouseLeave(){
  this.el.nativeElement.style.transform ='scale(1)';
  this.el.nativeElement.style.transition ='transform 0.3s ease-in-out';
}
}

