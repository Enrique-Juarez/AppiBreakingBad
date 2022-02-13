import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...arg: Object[]):any[] {
    const resultBusqueda = [];
    for(const actor of value){
      if(actor.name.indexOf(arg) >-1){
        resultBusqueda.push(actor);
      }
    }
    return resultBusqueda;
  }

}
