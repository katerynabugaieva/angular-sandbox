import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { RoutingAuthService } from "../routing-auth.service";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"]
})
export class HomePageComponent implements OnInit {
  constructor(
    private auth: RoutingAuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {}
  openCarsPage() {
    this.router.navigate(["cars"], { relativeTo: this.route });
  }
  changeAuthStatus(status: string) {
    if (status === "login") {
      this.auth.logIn();
    } else if (status === "logout") {
      this.auth.logOut();
    }
  }
}
