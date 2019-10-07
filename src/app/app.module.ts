import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CarsComponent } from "./sandbox/cars/cars.component";
import { CarComponent } from "./sandbox/car/car.component";
import { AddCarComponent } from "./sandbox/add-car/add-car.component";
import { CreateDirectiveComponent } from "./create-directive/create-directive.component";
import { BackgroundDirective } from "./create-directive/directives/background.directive";
import { PipesComponent } from "./pipes/pipes.component";
import { PowPipe } from "./create-pipes/pow.pipe";
import { CreatePipesComponent } from "./create-pipes/create-pipes.component";
import { MyTestPipesPipe } from "./my-test-pipes.pipe";
import { PipesFilterComponent } from "./pipes-filter/pipes-filter.component";
import { CarFilterPipe } from "./car-filter.pipe";
import { CreateServiceComponent } from "./create-service/create-service.component";

@NgModule({
  declarations: [
    AppComponent,
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
    CreateServiceComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
