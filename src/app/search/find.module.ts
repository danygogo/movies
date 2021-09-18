import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindComponent } from './find/find.component';

//Se agrega para intentar resolver el error del http
import { HttpClientModule } from '@angular/common/http'



@NgModule({
  declarations: [
    FindComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule //Se agrega para intentar resolver el error del http, si sirvió
  ],
  exports: [
    FindComponent
  ],
  providers: [

  ]
})
export class FindModule { }
