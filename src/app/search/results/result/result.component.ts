import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FindService } from '../../services/find.service';
import { switchMap } from 'rxjs/operators';
import { ResultInterface } from '../interfaces/results.interface';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  movie!: ResultInterface

  constructor(
    private activatedRoute: ActivatedRoute, 
    private findService: FindService
    ) {}

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap((params) => this.findService.searchID(params.imdbID))
    )
    .subscribe(resp =>{
      this.movie = resp
    })

  }

}
