
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterLocalidad'
})
export class FiltroLocalidadPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resulConsultas = [];
    for(const consulta of value){
      if(consulta.localidad.toUpperCase().indexOf(arg.toUpperCase()) > -1){
         resulConsultas.push(consulta);
      };
    };
    return resulConsultas;
  }

}