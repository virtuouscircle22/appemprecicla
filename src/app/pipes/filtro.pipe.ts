import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterDescripcion'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    let des: string
    const resultConsultas = [];
    for(const consulta of value){
      des = consulta.descripcion.toUpperCase()
      if(des.indexOf(arg.toUpperCase()) > -1){
         resultConsultas.push(consulta);
      };
    };
    return resultConsultas;
  }

}

