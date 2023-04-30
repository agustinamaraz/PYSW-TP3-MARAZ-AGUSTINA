import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'precio'
})
export class PrecioPipe implements PipeTransform {

  transform(value: number): string {
    let valueModified:string;
    valueModified = '$'+(value.toString())+' ARS';
    return valueModified;
  }
  
}
