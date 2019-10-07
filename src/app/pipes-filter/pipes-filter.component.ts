import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pipes-filter",
  templateUrl: "./pipes-filter.component.html",
  styleUrls: ["./pipes-filter.component.css"]
})
export class PipesFilterComponent {
  searchCar = "";
  cars = [
    { name: "Ford" },
    { name: "Mazda" },
    { name: "Bently" },
    { name: "Audi" },
    { name: "Mersedes" },
    { name: "BMW" }
  ];
}
