import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-car-add-service",
  templateUrl: "./car-add-service.component.html",
  styleUrls: ["./car-add-service.component.css"]
})
export class CarAddServiceComponent {
  @Output() onCarAdd = new EventEmitter<String>();
  carName = "";

  addCar() {
    this.onCarAdd.emit(this.carName);
    this.carName = "";
  }
}
