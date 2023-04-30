import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipoEspectador'
})
export class TipoEspectadorPipe implements PipeTransform {

  transform(value: string): string {
    if(value==='l'){
      value = "LOCAL"
    }else if(value==='e'){
      value = "EXTRANJERO"
    }

    return value;
  }

}
