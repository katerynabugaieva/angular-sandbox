import {
  Directive,
  ElementRef,
  OnInit,
  Renderer2,
  HostListener,
  HostBinding,
  Input
} from "@angular/core";

@Directive({
  selector: "[create-directiveBackground]"
})
export class BackgroundDirective implements OnInit {
  @Input() hoverColor: string = "green";
  @Input() defaultColor: string = "transparent";

  @HostBinding("style.backgroundColor") background: string;
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.background = this.defaultColor;
  }

  @HostListener("mouseenter") mouseEnter() {
    // this.element.nativeElement.style.backgroundColor = "red";
    this.background = this.hoverColor;
  }
  @HostListener("mouseleave") mouseLeave() {
    //this.element.nativeElement.style.backgroundColor = "transparent";
    this.background = this.defaultColor;
  }
}
