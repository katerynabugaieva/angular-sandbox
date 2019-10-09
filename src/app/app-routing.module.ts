import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RoutingAuthService } from "./routing/routing-auth.service";
import { RoutingAuthGuard } from "./routing/routing-auth-guard.service";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [RoutingAuthService, RoutingAuthGuard]
})
export class AppRoutingModule {}
