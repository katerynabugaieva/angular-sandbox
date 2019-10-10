import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ModulesCarsPageComponent } from "./modules-cars-page/modules-cars-page.component";
import { ModulesHomePageComponent } from "./modules-home-page/modules-home-page.component";

const appRoutes: Routes = [
  {
    path: "cars",
    component: ModulesCarsPageComponent,
    children: [{ path: ":id/:name", component: ModulesCarsPageComponent }]
  },
  { path: "", component: ModulesHomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class ModulesAppRoutingModule {}
