import { ConsoleService } from "../sandbox/console.service";
import { Injectable } from "@angular/core";

@Injectable()
export class CarsService {
  constructor(private consoleService: ConsoleService) {}
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

  addCar(name: string) {
    this.consoleService.log("Car ${name} was added");
    this.cars.push({
      isSold: false,
      name
    });
  }
}
