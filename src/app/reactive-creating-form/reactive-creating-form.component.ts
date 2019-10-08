import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-reactive-creating-form",
  templateUrl: "./reactive-creating-form.component.html",
  styleUrls: ["./reactive-creating-form.component.css"]
})
export class ReactiveCreatingFormComponent implements OnInit {
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

  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      user: new FormGroup({
        email: new FormControl("", [Validators.required, Validators.email]),
        pass: new FormControl("", Validators.required)
      }),
      country: new FormControl("ua"),
      answer: new FormControl("yes")
    });
  }
  onSubmit() {
    console.log(this.form);
  }
}
