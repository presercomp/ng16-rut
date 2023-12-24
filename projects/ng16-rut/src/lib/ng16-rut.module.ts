import { NgModule } from '@angular/core';
import { Ng16RutComponent } from './ng16-rut.component';
import { Ng16RutPipe } from './ng16-rut.pipe';
import { Ng16RutDirective } from './ng16-rut.directive';
import { Ng16RutValidator } from './ng16-rut.validator';
import { Ng16RutValueAccessor } from './ng16-rut-value-accessor';

@NgModule({
  declarations: [
    Ng16RutPipe,
    Ng16RutDirective,
    Ng16RutValidator,
    Ng16RutValueAccessor
  ],
  imports: [
    Ng16RutValidator
  ],
  exports: [
    Ng16RutComponent,
    Ng16RutDirective,
    Ng16RutValidator,
    Ng16RutValueAccessor
  ]
})
export class Ng16RutModule { }
