import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-modules-car-page",
  templateUrl: "./modules-car-page.component.html",
  styleUrls: ["./modules-car-page.component.css"]
})
export class ModulesCarPageComponent implements OnInit {
  id: number;
  name: string;
  color: string;
  year: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = +this.route.snapshot.params["id"];
    this.name = this.route.snapshot.params["name"];
    this.color = this.route.snapshot.queryParams["color"];
    this.year = this.route.snapshot.queryParams["year"];

    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.name = params["name"];
    });

    this.route.queryParams.subscribe((params: Params) => {
      this.color = params["color"];
      this.year = params["year"];
    });
  }
}
