import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pipes-filter",
  templateUrl: "./pipes-filter.component.html",
  styleUrls: ["./pipes-filter.component.css"]
})
export class PipesFilterComponent {
  searchCar = "";
  cars = [
    { name: "Ford", description: "wfm" },
    { name: "Mazda", description: "wfm1" },
    { name: "Bently", description: "wfm2" },
    { name: "Audi", description: "wfm3" },
    { name: "Mersedes", description: "wfm4" },
    { name: "BMW", description: "wfm5" }
  ];

  addCar() {
    this.cars.push({
      name: "new car",
      description: "new d"
    });
  }
}
