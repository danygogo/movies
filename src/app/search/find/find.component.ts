import { Component, OnInit } from '@angular/core';
import { Search } from '../interfaces/find.interface';
import { FindService } from '../services/find.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {

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
    this.findService.searchMovie(entry, this.preference)
    .subscribe((resp) =>{
      this.movies = resp.Search
      console.log(this.movies)
    })
  }//End of search

}
