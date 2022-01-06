import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindComponent } from './find/find.component';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { LoadingComponent } from './loading/loading.component';
import { ResultComponent } from './results/result/result.component';




@NgModule({
  declarations: [
    FindComponent,
    MoviesListComponent,
    LoadingComponent,
    ResultComponent

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    FindComponent
  ],
  providers: [

  ]
})
export class FindModule { }
