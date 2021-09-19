import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FindModule } from './search/find.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';





@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FindModule,
    RouterModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
