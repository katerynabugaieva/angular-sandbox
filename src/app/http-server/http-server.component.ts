import { Component } from "@angular/core";
import { HttpCarsService } from "./http-cars.service";
import { AddCarComponent } from "../sandbox/add-car/add-car.component";

interface Cars {
  carName: string;
  color: string;
  id: number;
}
@Component({
  selector: "app-http-server",
  templateUrl: "./http-server.component.html",
  styleUrls: ["./http-server.component.css"]
})
export class HttpServerComponent {
  colors = ["red", "blue", "green", "yellow", "pink", "grey"];
  cars: Cars[] = [];
  carName: string = "";
  constructor(private carsService: HttpCarsService) {}

  loadCars() {
    this.carsService.getCars().subscribe((cars: Cars[]) => {
      this.cars = cars;
    });
  }
  addCar() {
    this.carsService.addCar(this.carName).subscribe(json => console.log(json));
    this.carName = "";
  }
  getRandomColor() {
    const num = Math.round(Math.random() * (this.colors.length - 1));
    return this.colors[num];
  }

  setNewColor(car: Cars) {
    this.carsService
      .changeColor(car, this.getRandomColor())
      .subscribe(data => console.log(data));
  }
}
