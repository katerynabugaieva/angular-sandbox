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
      transition("start => end", animate(1500)),
      transition("end => start", animate("800ms 0.5s ease-out"))
    ])
  ]
})
export class AnimationComponent {
  clickedDivState = "end";
  changeDivState() {
    setTimeout(() => {
      this.clickedDivState = "start";
    }, 1000);
  }
}
