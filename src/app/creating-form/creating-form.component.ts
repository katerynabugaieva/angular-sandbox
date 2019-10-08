import { Component, ViewChild } from "@angular/core";
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
  @ViewChild("form", { static: false }) form: NgForm;
  isSubmited = false;
  formData = {};

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
    this.isSubmited = true;
    this.formData = this.form.value;
    this.form.reset();
  }
  addRandEmail() {
    const randEmail = "test@gmail.com";
    /*
    this.form.setValue({
      user: {
        pass: "",
        email: randEmail
      },
      country: "",
      answer: ""
    });
    */
    this.form.form.patchValue({
      user: {
        email: randEmail
      }
    });
  }
}
