import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FindModule } from './search/find.module';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FindModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
