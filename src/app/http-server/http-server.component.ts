import { Component } from "@angular/core";
import { HttpCarsService } from "./http-cars.service";

@Component({
  selector: "app-http-server",
  templateUrl: "./http-server.component.html",
  styleUrls: ["./http-server.component.css"]
})
export class HttpServerComponent {
  cars = [];
  constructor(private carsService: HttpCarsService) {}

  loadCars() {
    this.carsService.getCars().subscribe(response => {
      console.log(response);
    });
  }
}
