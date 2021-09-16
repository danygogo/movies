import { Component, OnInit } from '@angular/core';
import { Find } from '../interfaces/find.interface';
import { FindService } from '../services/find.service';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {
  entry: string = ""
  movies: Find[] = [];

  constructor(private findService: FindService) { }

  ngOnInit(): void {
  }

  search(entry : string){
    this.entry = entry;
    console.log("Me encuentro en el primer llamado, en metodo search, El valor digitado es:" + entry)
    /*this.findService.searchMovie(entry).subscribe((resp) =>{
      this.movies = resp;
      console.log(this.movies)
    })*/


  }//End of search

}
