import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg?: any): any {
    const result =[];
    if(!arg) return value;
    for(let p of value){
      if(p.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        result.push(p);
      }
    };
    return result;
  }

}
