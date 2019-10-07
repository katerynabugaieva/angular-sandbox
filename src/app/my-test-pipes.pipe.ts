import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myTestPipes'
})
export class MyTestPipesPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
