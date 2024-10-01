import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/Movie';
import { Store } from '@ngrx/store';
import { addMovies, addMoviesWithoutProps, getMovies } from '../store/actions/movie.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  movies:Movie[]=[]
  newMovie:Movie=new Movie();
  ngOnInit(): void {
      
  }

  constructor(private store:Store){}

  getAllMovies():void{
    this.store.dispatch(getMovies());
  }

  addNewMovies():void{
    this.store.dispatch(addMoviesWithoutProps(this.newMovie));
    this.newMovie= new Movie();
  }
}
