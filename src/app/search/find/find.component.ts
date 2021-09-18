import { Component, OnInit } from '@angular/core';
import { Find, Search } from '../interfaces/find.interface';
import { FindService } from '../services/find.service';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {
  entry: string = ""
  movies: Search[] = [];
 
  constructor(private findService: FindService) { }

  ngOnInit(): void {
  }

  search(entry : string){
    this.entry = entry;
    console.log("Me encuentro en el \
    primer llamado, en metodo search, El valor digitado es:" + entry)
    this.findService.searchMovie(entry).subscribe((resp) =>{
      this.movies = resp.Search
      console.log(this.movies)
      console.log(this.movies[0].Title)

   
      /*
      Esto logra capturar el titulo
      console.log(resp.Search[0].Title)*/

    })


  }//End of search

}
