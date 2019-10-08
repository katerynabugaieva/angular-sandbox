import { Injectable } from "@angular/core";

@Injectable()
export class RoutingCarsService {
  cars = [
    {
      name: "Ford",
      id: 1
    },
    {
      name: "bmw",
      id: 2
    },
    {
      name: "mersedes",
      id: 3
    }
  ];
}
