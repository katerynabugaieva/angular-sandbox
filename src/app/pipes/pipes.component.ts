import { Component } from "@angular/core";

@Component({
  selector: "app-pipes",
  templateUrl: "./pipes.component.html"
})
export class PipesComponent {
  name = "WebForMySelf";
  pi = Math.PI;
  money = 360;
  date = new Date();
  amount = 0.45;
  object = {
    foo: "bar",
    baz: "qux",
    nested: {
      xyz: 3,
      numbers: [1, 2, 3]
    }
  };
}
