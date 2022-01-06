import { Component } from '@angular/core';
import { Search } from '../interfaces/find.interface';
import { FindService } from '../services/find.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent{

  entry: string = ""
  movies: Search[] = [];
  preference: string = ""
  results: string = ""
 
  constructor(private findService: FindService,
              private activatedRoute: ActivatedRoute,
              private router: Router) 
  { 
    this.activatedRoute.params
      .subscribe( resp => {
      this.preference = resp.type
    })
  }



 search(entry : string){
    this.results = "loading";
    this.entry = entry;



    this.findService.searchMovie(entry, this.preference)
    .subscribe((resp) =>{
       this.results = resp;
    },err=>{},() =>
    {
      if(this.results == "True")
      {
        this.router.navigate(["list"])
      }
    } )
    

  }//End of search

  closeAlert(){
    this.results = ""
    console.log(this.results)
  }

}
