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

  charsCount = 5;
  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      user: new FormGroup({
        email: new FormControl("", [Validators.required, Validators.email]),
        pass: new FormControl("", [
          Validators.required,
          this.checkForLength.bind(this)
        ])
      }),
      country: new FormControl("ua"),
      answer: new FormControl("yes")
    });
  }
  onSubmit() {
    console.log(this.form);
  }
  //{'errorCode: true}
  //null undefined
  checkForLength(control: FormControl) {
    if (control.value.length <= this.charsCount) {
      return { lengthError: true };
    }
    return null;
  }
}
