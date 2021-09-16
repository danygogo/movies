import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';
import { Find } from '../interfaces/find.interface';

@Injectable({
  providedIn: 'root'
})
export class FindService {
  private apiURL: string = "http://www.omdbapi.com/?apikey=9ba4cef9&s=cars"
/*
  constructor(private http: HttpClient) { }

  searchMovie(term: string): Observable<Find[]>{
    console.log("He entrado al search del service")
    const url = `${this.apiURL}`
    //s/${term}
    return this.http.get<Find[]>(url)
  }*/
}
