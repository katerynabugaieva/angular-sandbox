import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { ModulesHomePageComponent } from "./modules-home-page/modules-home-page.component";

const appRoutes: Routes = [
  { path: "", component: ModulesHomePageComponent },
  {
    path: "cars",
    loadChildren: "./modules-cars-page/modules-cars.module#ModulesCarsModule"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class ModulesAppRoutingModule {}
