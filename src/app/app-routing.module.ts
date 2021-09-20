import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultComponent } from "./search/results/result/result.component"
import { FindComponent } from './search/find/find.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full"
  },
  {
    path: "type/:type",
    component: FindComponent,
  },
  {
    path: "type/:type/movie/:imdbID",
    component: ResultComponent
  },
  {
    path: "**",
    component: NotFoundComponent
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
