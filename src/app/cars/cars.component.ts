import { Component, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-cars",
  templateUrl: "./cars.component.html",
  styleUrls: ["./cars.component.css"],
  encapsulation: ViewEncapsulation.Native
})
export class CarsComponent {
  cars: [
    { name: string; year: number }
    // { name: string; year: number },
    // { name: string; year: number }
  ] = [
    {
      name: "ford",
      year: 2017
    }
    /*
    {
      name: "mazda",
      year: 2013
    },
    {
      name: "audi",
      year: 2012
    }
    */
  ];

  /*
  items = [
    { id: 3, name: "yes" },
    { id: 1, name: "no" },
    { id: 2, name: "maybe" }
  ];
*/
  /*
  itemsDate = [
    new Date(2018, 3, 5),
    new Date(2018, 3, 6),
    new Date(2018, 3, 7),
    new Date(2018, 3, 8),
    new Date(2018, 3, 9)
  ];
  inputText: string = "";
  inputTextHTML: string = "";
  inputTextP: string = "";
  inputTextDoubleBinding: string = "Default";
*/
  constructor() {}

  updateCarList(car: { name: string; year: number }) {
    this.cars.push(car);
  }

  changeCarName() {
    this.cars[0].name = "new car name";
  }

  deleteCar() {
    this.cars.splice(0, 1);
  }
  /*
  setBigCarText(car: string) {
    return car.length > 4 ? true : false;
  }
  */
  /*
  onKeyUp(event: Event) {
    this.inputTextHTML = (<HTMLInputElement>event.target).value;
  }

  onInput(value) {
    this.inputText = value;
  }

  onInputP(event) {
    this.inputTextP = event.target.value;
  }
*/
}
