import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../models/Movie';
import { Store } from '@ngrx/store';
import { MovieState } from '../store/reducers/movie.reducers';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies:Movie[]=[]
  movies$ = this.store.select(state => state.movies);
  ngOnInit(): void { 
    this.movies$.subscribe((movies:any) => {
      this.movies=movies.movies;
      console.log("Les films: ", this.movies); // Vérifiez le type ici
    });
  }

  constructor(private store:Store<MovieState>) {
    
  }


}
