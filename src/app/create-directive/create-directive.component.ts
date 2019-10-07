import { Component } from "@angular/core";

@Component({
  selector: "app-create-directive",
  templateUrl: "./create-directive.component.html",
  styleUrls: ["./create-directive.component.css"]
})
export class CreateDirectiveComponent {
  headerText = "Creating new directive!";
  items = [1, 2, 3, 4, 5];
  current = 1;
  onClick(number: number) {
    this.current = number;
  }
}
