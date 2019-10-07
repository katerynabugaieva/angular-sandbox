import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "carFilter",
  pure: false
})
export class CarFilterPipe implements PipeTransform {
  transform(carList, searchString: string, fieldName: string): any {
    if (carList.length === 0 || searchString === "") return carList;

    return carList.filter(
      car =>
        //  car.name.toLowerCase().indexOf(searchString.toLocaleLowerCase()) !== -1
        car[fieldName]
          .toLowerCase()
          .indexOf(searchString.toLocaleLowerCase()) !== -1
    );
  }
}
