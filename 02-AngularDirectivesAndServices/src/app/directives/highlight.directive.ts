import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elementRef: ElementRef) { }
  @HostListener("mouseenter")
  onMouseEnter() {
    this.elementRef.nativeElement.style.backgroundColor = "yellow";
  }

  @HostListener("mouseleave")
  onMouseLeave() {
    this.elementRef.nativeElement.style.backgroundColor = "initial";
  }

}
