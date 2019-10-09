import { resolve } from "url";
import { reject } from "q";

export class RoutingAuthService {
  isLoggegIn = false;
  isAuth() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.isLoggegIn);
      }, 1000);
    });
  }
  logIn() {
    this.isLoggegIn = true;
  }
  logOut() {
    this.isLoggegIn = false;
  }
}
