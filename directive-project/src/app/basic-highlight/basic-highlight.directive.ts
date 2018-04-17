import {Directive, ElementRef, OnInit} from '@angular/core';

// When we create new directive, do not forget to add it in app.module.ts
@Directive({
  // selector is absolutely needed and unique; '[]' for attribute style
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {

  // elementRef is now both property of the class by use of 'private'
  constructor(private elementRef: ElementRef) {  }

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
    this.elementRef.nativeElement.style.color = 'white';
  }
}
