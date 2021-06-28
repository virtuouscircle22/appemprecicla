import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterName'
})
export class FiltroNamePipe  implements PipeTransform {

  transform(value: any, arg: any): any {
    const resuConsultas = [];
    for(const consulta of value){
      if(consulta.name.toUpperCase().indexOf(arg.toUpperCase()) > -1){
         resuConsultas.push(consulta);
      };
    };
    return resuConsultas;
  }

}
