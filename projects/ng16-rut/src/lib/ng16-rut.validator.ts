import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, FormControl } from '@angular/forms';
import { rutValidate } from './ng16-rut.helper';

export function validateRutFactory(rutValidate: Function){
  return (c: FormControl) => {
    if (!c.value) {
      return null;
    }
    return rutValidate(c.value) ? null : {invalidRut: true};
  }
}

@Directive({
  selector: '[validateRut][ngModel],[validateRut][formControl]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => Ng16RutValidator), multi: true}
  ]
})
export class Ng16RutValidator {

  private validator: Function;

  constructor() {
    this.validator = validateRutFactory(rutValidate);
  }

  public validate(c: FormControl) {
    return this.validator(c);
  }

}
