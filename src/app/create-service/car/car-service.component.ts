import { Component, Input } from "@angular/core";

@Component({
  selector: "app-car-service",
  templateUrl: "./car-service.component.html",
  styleUrls: ["./car-service.component.css"]
})
export class CarServiceComponent {
  @Input() car;

  getClass() {
    return {
      "list-group-item-success": !this.car.isSold,
      "list-group.item-danger": this.car.isSold,
      "list-group-item": true
    };
  }

  onAction(type: string) {
    this.car.isSold = type === "buy" ? true : false;
    console.log(`${this.car.name} status = ${type}`);
  }
}
