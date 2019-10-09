import { Component, OnInit } from "@angular/core";
import { HttpCarsService } from "./http-cars.service";
import { AddCarComponent } from "../sandbox/add-car/add-car.component";
import { filter } from "rxjs/operators";

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
export class HttpServerComponent implements OnInit {
  colors = ["red", "blue", "green", "yellow", "pink", "grey"];
  cars: any;
  carName: string = "";
  constructor(private carsService: HttpCarsService) {}
  appTitle;

  ngOnInit() {
    this.appTitle = this.carsService.getAppTitle();
  }

  loadCars() {
    this.cars = this.carsService.getCars();
  }
  addCar() {
    this.carsService.addCar(this.carName).subscribe((car: Cars) => {
      this.cars.push(car);
    });
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

  deleteCar(car: Cars) {
    this.carsService
      .deleteCar(car)
      .subscribe(data => (this.cars = this.cars.filter(c => c.id !== car.id)));
  }
}
