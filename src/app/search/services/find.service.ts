import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http"
import { Observable } from 'rxjs';
import { Find, Search } from '../interfaces/find.interface';
import { ResultInterface } from '../results/interfaces/results.interface';



@Injectable({
  providedIn: 'root'
})
export class FindService {
  private apiURL: string = "http://www.omdbapi.com/?apikey=9ba4cef9"

  constructor(private http: HttpClient) { }

  searchMovie(term: string, type: string): Observable<Find>{
    term = term.trim()
    const url = `${this.apiURL}&s=${term}&type=${type}`
    return this.http.get<Find>(url)
  }

  searchID(term: string): Observable<ResultInterface>{
    const url = `${this.apiURL}&i=${term}&plot=full`
    return this.http.get<ResultInterface>(url)
  }

}
