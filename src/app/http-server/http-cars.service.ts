import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";

@Injectable()
export class HttpCarsService {
  constructor(private http: Http) {}

  getCars() {
    const headers = new Headers({
      "Content-Type": "application/json; charset=utf8"
    });
    return this.http
      .get("http://localhost:3000/cars", { headers })
      .map((response: Response) => response.json());
  }

  addCar(carName: string) {
    const headers = new Headers({
      "Content-Type": "application/json; charset=utf8"
    });
    const data = {
      carName: carName,
      color: "blue"
    };
    return this.http
      .post("http://localhost:3000/cars", data, { headers })
      .map((response: Response) => response.json());
  }

  changeColor(car: any, color: string) {
    car.color = color;
    return this.http
      .put(`http://localhost:3000/cars/${car.id}`, car)
      .map((response: Response) => response.json());
  }

  deleteCar(car: any) {
    return this.http
      .delete(`http://localhost:3000/cars/${car.id}`)
      .map((response: Response) => response.json());
  }
}
