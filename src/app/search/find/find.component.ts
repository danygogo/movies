import { Component, Input, OnInit } from '@angular/core';
import { Search } from '../interfaces/find.interface';
import { FindService } from '../services/find.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {

  @Input("type") type: string = ""

  entry: string = ""
  movies: Search[] = [];
  preference: string = ""
 
  constructor(private findService: FindService,
    private activatedRoute: ActivatedRoute) { 
      this.activatedRoute.params
    .subscribe( resp => {
      this.preference = resp.type
    } )}

  ngOnInit(): void {
  }

  search(entry : string){
    this.entry = entry;
    console.log("Me encuentro en el \
    primer llamado, en metodo search, El valor digitado es:" + entry)
    this.findService.searchMovie(entry, this.preference)
    .subscribe((resp) =>{
      this.movies = resp.Search
      console.log(this.movies)
      console.log(this.movies[0].Title)
    })


  }//End of search

}
