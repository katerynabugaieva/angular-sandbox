import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-creating-form",
  templateUrl: "./creating-form.component.html",
  styleUrls: ["./creating-form.component.css"],
  styles: [
    `
      input.ng-invalid.ng-touched {
        border: 1px solid red;
      }
    `
  ]
})
export class CreatingFormComponent {
  answers = [
    {
      type: "yes",
      text: "yes"
    },
    {
      type: "no",
      text: "no"
    }
  ];

  defaultAnswer = "no";
  defaultCountry = "ua";
  submitForm(form: NgForm) {
    console.log(form);
  }
}
