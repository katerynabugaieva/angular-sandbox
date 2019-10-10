import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class RoutingCarsService {
  cars = [
    {
      name: "Ford",
      id: 1,
      year: 2017,
      color: "red"
    },
    {
      name: "bmw",
      id: 2,
      year: 2010,
      color: "blau"
    },
    {
      name: "mersedes",
      id: 3,
      year: 2014,
      color: "pink"
    }
  ];
}
