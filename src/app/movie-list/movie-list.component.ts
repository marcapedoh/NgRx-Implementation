import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../models/Movie';
import { select, Store } from '@ngrx/store';
import { MovieState } from '../store/reducers/movie.reducers';
import { movieSelector } from '../store/selector/movie.selector';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies:Movie[]=[];
  movies$ = this.store.pipe(select(movieSelector));
  done=new Subject();
  ngOnInit(): void { 
    this.movies$.pipe(takeUntil(this.done))
    .subscribe((data)=> (this.movies=JSON.parse(JSON.stringify(data))))
  }

  constructor(private store:Store<MovieState>) {
    
  }


}
