import { Component } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";

@Component({
  selector: "app-animation",
  templateUrl: "./animation.component.html",
  styleUrls: ["./animation.component.css"],
  animations: [
    trigger("clickedDiv", [
      state(
        "start",
        style({
          backgroundColor: "blue",
          width: "150px",
          height: "150px"
        })
      ),
      state(
        "end",
        style({
          backgroundColor: "red",
          width: "300px",
          height: "300px"
        })
      ),
      state(
        "active",
        style({
          backgroundColor: "orange",
          width: "320px",
          height: "320px"
        })
      ),
      transition("start <=> end", animate(1500)),
      transition("start => active", animate(400)),
      transition("active => end", animate("800ms 0.5s ease-out"))
    ]),
    trigger("multi", [
      state(
        "start",
        style({
          width: "150px",
          height: "150px",
          border: "5px solid black"
        })
      ),
      state(
        "end",
        style({
          width: "170px",
          height: "170px",
          background: "blue"
        })
      ),
      transition("start <=> end", [
        style({
          background: "red"
        }),
        animate(
          1500,
          style({
            background: "yellow"
          })
        ),
        animate(
          1000,
          style({
            width: "200px",
            height: "200px"
          })
        ),
        animate(1000)
      ])
    ])
  ]
})
export class AnimationComponent {
  clickedDivState = "end";
  multiState = "start";
  changeDivState() {
    setTimeout(() => {
      this.clickedDivState = "start";
    }, 1000);
  }
}
