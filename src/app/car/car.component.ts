import {
  Component,
  Input,
  ElementRef,
  ContentChild,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from "@angular/core";

@Component({
  selector: "app-car",
  templateUrl: "./car.component.html",
  styleUrls: ["./car.component.css"]
})
export class CarComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  @Input() carItem: { name: string; year: number };
  @Input() name: string;
  @ContentChild("carHeading", { static: false }) carHeading: ElementRef;

  constructor() {
    console.log("constructor");
  }

  ngOnInit() {
    console.log("onInit");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("onChanges", changes);
  }

  ngDoCheck() {
    console.log("doCheck");
  }

  ngAfterContentChecked() {
    console.log("AfterContentChecked");
  }

  ngAfterContentInit() {
    console.log("AfterContentInit");
  }

  ngAfterViewChecked() {
    console.log("AfterViewChecked");
  }

  ngAfterViewInit() {
    console.log("AfterViewInit");
  }

  ngOnDestroy() {
    console.log("onDestroy");
  }
}
