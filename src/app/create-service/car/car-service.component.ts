import { Component, Input } from "@angular/core";
import { ConsoleService } from "../../console.service";

@Component({
  selector: "app-car-service",
  templateUrl: "./car-service.component.html",
  styleUrls: ["./car-service.component.css"],
})
export class CarServiceComponent {
  @Input() car;
  constructor(private consoleService: ConsoleService) {}
  getClass() {
    return {
      "list-group-item-success": !this.car.isSold,
      "list-group-item-danger": this.car.isSold,
      "list-group-item": true
    };
  }

  onAction(type: string) {
    this.car.isSold = type === "buy" ? true : false;
    //console.log(`${this.car.name} status = ${type}`);
    //const service = new ConsoleService();
    // service.log(`${this.car.name} status = ${type}`);
    this.consoleService.log(`${this.car.name} status = ${type}`);
  }
}
