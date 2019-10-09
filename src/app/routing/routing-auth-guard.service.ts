import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Injectable } from "@angular/core";
import { RoutingAuthService } from "./routing-auth.service";

@Injectable()
export class RoutingAuthGuard implements CanActivate {
  constructor(private auth: RoutingAuthService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.auth.isAuth().then((isLoggedIn: false) => {
      if (isLoggedIn) {
        return true;
      } else {
        return false;
      }
    });
  }
}
