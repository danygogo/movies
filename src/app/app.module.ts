import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FindModule } from './search/find.module';
import { FindService } from './search/services/find.service';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FindModule
  ],
  providers: [
    FindService  //Esto se importó para ver si se arreglaba el error de NullInjector
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
