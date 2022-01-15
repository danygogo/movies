import { Component, OnInit } from '@angular/core';
import { FindService } from '../services/find.service';
import { Search, Type } from '../interfaces/find.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  movies: Search[] = []

  constructor(private findService: FindService,
              private router: Router) { }

  ngOnInit(): void {
    this.movies = this.findService.movies
  }

  seeDetails(index: number){
    let imbd: string = this.movies[index].imdbID;
    let type: Type = this.movies[index].Type

    let url: string = `type/${type}/movie/${imbd}`

    this.router.navigate([url], )


  }

  

  



}
