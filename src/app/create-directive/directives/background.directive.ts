import {
  Directive,
  ElementRef,
  OnInit,
  Renderer2,
  HostListener
} from "@angular/core";

@Directive({
  selector: "[create-directiveBackground]"
})
export class BackgroundDirective implements OnInit {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {}

  @HostListener("mouseenter") mouseEnter() {
    this.element.nativeElement.style.backgroundColor = "red";
  }
  @HostListener("mouseleave") mouseLeave() {
    this.element.nativeElement.style.backgroundColor = "transparent";
  }
}
