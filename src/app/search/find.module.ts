import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindComponent } from './find/find.component';
import { FindService } from './services/find.service';


@NgModule({
  declarations: [
    FindComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FindComponent
  ],
  providers: [
    FindService //Esto se importó para ver si se arreglaba el error de NullInjector
  ]
})
export class FindModule { }
