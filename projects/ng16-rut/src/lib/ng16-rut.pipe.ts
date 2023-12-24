import { Pipe, PipeTransform } from '@angular/core';
import { rutFormat } from './ng16-rut.helper';

@Pipe({
  name: 'ng16Rut'
})
export class Ng16RutPipe implements PipeTransform {

  transform(value: string): unknown {
    return rutFormat(value);
  }

}
