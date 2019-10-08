import { Component } from "@angular/core";
import { HttpCarsService } from "./http-cars.service";

interface Cars {
  name: string;
  color: string;
  id: number;
}
@Component({
  selector: "app-http-server",
  templateUrl: "./http-server.component.html",
  styleUrls: ["./http-server.component.css"]
})
export class HttpServerComponent {
  cars: Cars[] = [];
  constructor(private carsService: HttpCarsService) {}

  loadCars() {
    this.carsService.getCars().subscribe((cars: Cars[]) => {
      this.cars = cars;
    });
  }
}
