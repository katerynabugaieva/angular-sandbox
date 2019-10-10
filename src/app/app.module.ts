import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ModulesComponent } from "./modules/modules.component";
import { ModulesCarPageComponent } from "./modules/modules-cars-page/modules-car-page/modules-car-page.component";
import { ModulesHeaderComponent } from "./modules/modules-header/modules-header.component";
import { ModulesHomePageComponent } from "./modules/modules-home-page/modules-home-page.component";
import { ModulesCarsPageComponent } from "./modules/modules-cars-page/modules-cars-page.component";
import { ColorDirective } from "../app/modules/shared/color.directives";
import { ModulesAppRoutingModule } from "./modules/modules-app-routing.module";
import { HttpModule } from "@angular/http";
import { HttpServerComponent } from "./http-server/http-server.component";
import { CarsComponent } from "./sandbox/cars/cars.component";
import { AddCarComponent } from "./sandbox/add-car/add-car.component";
import { CreateDirectiveComponent } from "./create-directive/create-directive.component";
import { BackgroundDirective } from "./create-directive/directives/background.directive";
import { PipesComponent } from "./pipes/pipes.component";
import { CreatePipesComponent } from "./create-pipes/create-pipes.component";
import { PowPipe } from "./create-pipes/pow.pipe";
import { CarComponent } from "./sandbox/car/car.component";
import { CarPageComponent } from "./routing/car-page/car-page.component";
import { HomePageComponent } from "./routing/home-page/home-page.component";
import { MyTestPipesPipe } from "./my-test-pipes.pipe";
import { CarsPageComponent } from "./routing/cars-page/cars-page.component";
import { RoutingComponent } from "./routing/routing.component";
import { ReactiveCreatingFormComponent } from "./reactive-creating-form/reactive-creating-form.component";
import { CreatingFormComponent } from "./creating-form/creating-form.component";
import { CarAddServiceComponent } from "./create-service/car-add/car-add-service.component";
import { CarServiceComponent } from "./create-service/car/car-service.component";
import { CreateServiceComponent } from "./create-service/create-service.component";
import { CarFilterPipe } from "./pipes-filter/car-filter.pipe";
import { PipesFilterComponent } from "./pipes-filter/pipes-filter.component";
//import { AppRoutingCarsModule } from "./routing/app-routing-cars.module";
import { CarsService } from "./create-service/cars.service";
import { ConsoleService } from "./sandbox/console.service";
import { RoutingCarsService } from "./routing/routing-cars.service";
import { ModulesCarsService } from "./modules/modules-cars.service";
@NgModule({
  declarations: [
    AppComponent,
    ModulesComponent,
    ModulesCarsPageComponent,
    ModulesCarPageComponent,
    ModulesHeaderComponent,
    ModulesHomePageComponent,
    ColorDirective,
    HttpServerComponent,

    CarsComponent,
    CarComponent,
    AddCarComponent,
    CreateDirectiveComponent,
    BackgroundDirective,
    PipesComponent,
    CreatePipesComponent,
    PowPipe,
    MyTestPipesPipe,
    PipesFilterComponent,
    CarFilterPipe,
    CreateServiceComponent,
    CarServiceComponent,
    CarAddServiceComponent,
    CreatingFormComponent,
    ReactiveCreatingFormComponent,
    RoutingComponent,
    CarsPageComponent,
    HomePageComponent,
    CarPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ModulesAppRoutingModule,
    HttpModule
    // AppRoutingCarsModule
  ],
  providers: [
    ModulesCarsService,
    CarsService,
    ConsoleService,
    RoutingCarsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
