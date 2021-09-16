import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultComponent } from "./search/results/result/result.component"
import { FindComponent } from './search/find/find.component';

const routes: Routes = [
  {
    path: "",
    component: FindComponent,
    pathMatch: "full"
  },
  {
    path: "movie/:imdbID",
    component: ResultComponent
  },
  {
    path: "**",
    redirectTo: ""
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
