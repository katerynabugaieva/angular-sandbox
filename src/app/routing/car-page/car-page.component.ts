import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-car-page",
  templateUrl: "./car-page.component.html",
  styleUrls: ["./car-page.component.css"]
})
export class CarPageComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  id: number;
  name: string;
  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.name = this.route.snapshot.params["name"];
    this.route.params.subscribe((params: Params) => {
      this.id = +params.id;
      this.name = params.name;
      console.log(params);
    });
  }
}
