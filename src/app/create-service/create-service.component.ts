import { Component } from "@angular/core";

@Component({
  selector: "app-create-service",
  templateUrl: "./create-service.component.html",
  styleUrls: ["./create-service.component.css"]
})
export class CreateServiceComponent {
  cars = [
    {
      name: "Ford",
      isSold: true
    },
    {
      name: "Mazda",
      isSold: false
    },
    {
      name: "Mersedes",
      isSold: false
    }
  ];

  addCarToList(carName: string) {
    this.cars.push({ name: carName, isSold: false });
  }
}
