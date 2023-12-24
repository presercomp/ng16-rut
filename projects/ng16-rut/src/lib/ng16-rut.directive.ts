import { Directive, EventEmitter, Output } from '@angular/core';
import * as rutHelpers from './ng16-rut.helper';

@Directive({
  selector: '[formatRut]',
  host: {
    '(blur)': 'onBlur($event)',
    '(focus)': 'onFocus($event)',
    '(input)': 'onChange($event)'
  }
})
export class Ng16RutDirective {
  @Output() public rutChange: EventEmitter<any>;
  constructor() {
    this.rutChange = new EventEmitter();
  }

  public onFocus(ev: Event): void {
    let htmlInputElement: HTMLInputElement = <HTMLInputElement> ev.target;
    htmlInputElement.value = rutHelpers.rutClean(htmlInputElement.value);
  }

  public onBlur(ev: Event): void {
    let htmlInputElement: HTMLInputElement = <HTMLInputElement> ev.target;
    htmlInputElement.value = rutHelpers.rutFormat(htmlInputElement.value) || '';
  }

  public onChange(ev: Event): void {
    let htmlInputElement: HTMLInputElement = <HTMLInputElement> ev.target;
    this.rutChange.emit(rutHelpers.rutClean(htmlInputElement.value));
  }

}
