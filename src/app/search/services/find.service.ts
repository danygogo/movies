import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';
import { pipe, of } from 'rxjs';
import { Find, Search } from '../interfaces/find.interface';
import { ResultInterface } from '../results/interfaces/results.interface';
import { map, tap } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class FindService {
  private apiURL: string = "http://www.omdbapi.com/?apikey=9ba4cef9"
  public movies: Search[] = []


  get listOfMovies(){
    return {...this.movies}
  }

  constructor(private http: HttpClient) { }






  searchMovie(term: string, type: string){
    this.movies = [];
    term = term.trim()
    const url = `${this.apiURL}&s=${term}&type=${type}`
    
    return this.http.get<Find>(url).pipe(
      tap(resp => {
        this.movies = resp.Search;
      }),
      map(
        resp => {
          return resp.Response
        }
      )
    )
  }











  searchID(term: string): Observable<ResultInterface>{
    const url = `${this.apiURL}&i=${term}&plot=full`
    return this.http.get<ResultInterface>(url)}

}//end of the class

