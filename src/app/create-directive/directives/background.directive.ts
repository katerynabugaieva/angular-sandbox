import {
  Directive,
  ElementRef,
  OnInit,
  Renderer2,
  HostListener,
  HostBinding
} from "@angular/core";

@Directive({
  selector: "[create-directiveBackground]"
})
export class BackgroundDirective implements OnInit {
  @HostBinding("style.backgroundColor") background: string;
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {}

  @HostListener("mouseenter") mouseEnter() {
    // this.element.nativeElement.style.backgroundColor = "red";
    this.background = "red";
  }
  @HostListener("mouseleave") mouseLeave() {
    //this.element.nativeElement.style.backgroundColor = "transparent";
    this.background = "transparent";
  }
}
