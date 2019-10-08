import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-creating-form",
  templateUrl: "./creating-form.component.html",
  styleUrls: ["./creating-form.component.css"]
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
  submitForm(form: NgForm) {
    console.log(form);
  }
}
