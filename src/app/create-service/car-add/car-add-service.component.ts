import { Component } from "@angular/core";
import { CarsService } from "src/app/create-service/cars.service";
@Component({
  selector: "app-car-add-service",
  templateUrl: "./car-add-service.component.html"
})
export class CarAddServiceComponent {
  carName = "";
  constructor(private carsService: CarsService) {}
  addCar() {
    this.carsService.addCar(this.carName);
    this.carName = "";
  }
}
