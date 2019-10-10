import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
import { CarsPageComponent } from "./cars-page/cars-page.component";
import { CarPageComponent } from "./car-page/car-page.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { RoutingAuthGuard } from "./routing-auth-guard.service";
import { NewPageComponent } from "./new-page/new-page.component";

const appRoutesCar: Routes = [
  {
    path: "cars",
    component: CarsPageComponent,
    canActivate: [RoutingAuthGuard],
    children: [{ path: ":id/:name", component: CarPageComponent }]
  },
  { path: "", component: HomePageComponent },
  { path: "new", component: NewPageComponent },
  { path: "not-found", component: NotFoundComponent },
  { path: "**", redirectTo: "not-found" }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutesCar)],
  exports: [RouterModule],
  declarations: [NotFoundComponent, NewPageComponent]
})
export class AppRoutingCarsModule {}
