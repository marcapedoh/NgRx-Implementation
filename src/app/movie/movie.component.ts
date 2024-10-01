import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { MovieState } from '../store/reducers/movie.reducers';
import { movie } from '../store/selector/movie.selector';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  movie$=this.store.pipe(select(movie))
  constructor(private store:Store<MovieState>){

  }
  ngOnInit(): void {
      
  }
}
