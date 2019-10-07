import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CarsComponent } from "./cars/cars.component";
import { CarComponent } from "./car/car.component";
import { AddCarComponent } from "./add-car/add-car.component";
import { CreateDirectiveComponent } from "./create-directive/create-directive.component";
import { BackgroundDirective } from "./create-directive/directives/background.directive";
import { PipesComponent } from "./pipes/pipes.component";
import { PowPipe } from "./create-pipes/pow.pipe";
import { CreatePipesComponent } from "./create-pipes/create-pipes.component";
import { MyTestPipesPipe } from "./my-test-pipes.pipe";
import { PipesFilterComponent } from "./pipes-filter/pipes-filter.component";
import { CarFilterPipe } from "./car-filter.pipe";

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
    CarFilterPipe
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
