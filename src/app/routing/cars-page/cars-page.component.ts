import { Component, OnInit } from "@angular/core";
import { RoutingCarsService } from "../routing-cars.service";

@Component({
  selector: "app-cars-page",
  templateUrl: "./cars-page.component.html",
  styleUrls: ["./cars-page.component.css"]
})
export class CarsPageComponent implements OnInit {
  cars = [];
  constructor(private carsService: RoutingCarsService) {}

  ngOnInit() {
    this.cars = this.carsService.cars;
  }
}
