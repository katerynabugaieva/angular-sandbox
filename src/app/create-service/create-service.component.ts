import { Component, OnInit } from "@angular/core";
import { CarsService } from "./cars.service";

@Component({
  selector: "app-create-service",
  templateUrl: "./create-service.component.html",
  styleUrls: ["./create-service.component.css"]
})
export class CreateServiceComponent implements OnInit {
  constructor(private service: CarsService) {}
  cars = [];

  ngOnInit() {
    this.cars = this.service.cars;
  }
}
