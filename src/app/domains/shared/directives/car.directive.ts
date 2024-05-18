import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[carDirective]',
  standalone: true
})
export class CarDirective {

  constructor(private elementRef:ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(){
    this.setBorderColor('blue','1px');
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.setBorderColor(null,'0px');
  }


  setBorderColor(color:string|null, width:string){
    this.elementRef.nativeElement.style.borderStyle='solid';
    this.elementRef.nativeElement.style.borderColor=color;
    this.elementRef.nativeElement.style.borderWidth=width;
  }

}
