import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef
} from "@angular/core";

@Component({
  selector: "app-add-car",
  templateUrl: "./add-car.component.html",
  styleUrls: ["./add-car.component.css"]
})
export class AddCarComponent implements OnInit {
  carName: string = "";
  carYear = 2017;
  @Output("onAddCar") carEmitter = new EventEmitter<{
    name: string;
    year: number;
  }>();

  @ViewChild("carYearInput", { static: false }) carYearInput: ElementRef;

  constructor() {}

  ngOnInit() {}

  addCar(carNameEl: HTMLInputElement) {
    //todo action
    console.log(this.carYearInput);
    this.carEmitter.emit({
      name: carNameEl.value,
      year: +this.carYearInput.nativeElement.value
    });
    carNameEl.value = "";
    this.carYearInput.nativeElement.value = 2017;
  }
}
