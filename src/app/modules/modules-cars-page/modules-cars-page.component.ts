import { Component, OnInit } from "@angular/core";
import { ModulesCarsService } from "../modules-cars.service";

@Component({
  selector: "app-modules-cars-page",
  templateUrl: "./modules-cars-page.component.html",
  styleUrls: ["./modules-cars-page.component.css"]
})
export class ModulesCarsPageComponent implements OnInit {
  cars = [];

  constructor(private carsService: ModulesCarsService) {}

  ngOnInit() {
    this.cars = this.carsService.cars;
  }
}
