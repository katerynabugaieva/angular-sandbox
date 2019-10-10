import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ModulesCarsPageComponent } from "./modules-cars-page.component";
import { ModulesCarPageComponent } from "./modules-car-page/modules-car-page.component";

const carRoutes: Routes = [
  {
    path: "cars",
    component: ModulesCarsPageComponent,
    children: [{ path: ":id/:name", component: ModulesCarPageComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(carRoutes)],
  exports: [RouterModule]
})
export class ModulesCarsRoutingModule {}
