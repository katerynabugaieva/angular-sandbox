import { NgModule } from "@angular/core";
import { ModulesCarsPageComponent } from "./modules-cars-page.component";
import { ModulesCarsService } from "../modules-cars.service";
import { CommonModule } from "@angular/common";
import { ModulesCarPageComponent } from "./modules-car-page/modules-car-page.component";
import { ModulesCarsRoutingModule } from "./modules-car-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [ModulesCarsPageComponent, ModulesCarPageComponent],
  imports: [CommonModule, ModulesCarsRoutingModule, SharedModule],
  providers: [ModulesCarsService]
})
export class ModulesCarsModule {}
