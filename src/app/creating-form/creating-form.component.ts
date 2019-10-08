import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-creating-form",
  templateUrl: "./creating-form.component.html",
  styleUrls: ["./creating-form.component.css"]
})
export class CreatingFormComponent {
  @ViewChild("form", { static: false }) form: NgForm;
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
  submitForm() {
    console.log(this.form);
  }
}
