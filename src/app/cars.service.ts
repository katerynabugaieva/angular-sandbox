export class CarsService {
  cars = [
    {
      name: "Ford",
      isSold: true
    },
    {
      name: "Mazda",
      isSold: false
    },
    {
      name: "Mersedes",
      isSold: false
    }
  ];

  addCar(name: string) {
    this.cars.push({
      isSold: false,
      name
    });
  }
}
