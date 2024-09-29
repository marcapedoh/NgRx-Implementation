import { Component, OnInit } from '@angular/core';
import { Movie } from './models/Movie';
import { Store } from '@ngrx/store';
import { addMoviesWithoutProps, getMovies } from './store/actions/movie.action';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  movies:Movie[]=[];
  newMovie:Movie=new Movie();
  constructor(private store:Store,private dataService:DataService){

  }
  ngOnInit(): void {
    this.getAllMovies()
  }
  addNewMovies():void{
    this.store.dispatch(addMoviesWithoutProps(this.newMovie));
    this.newMovie=new Movie();
  }

  getAllMovies():void{
    console.log(this.store.dispatch(getMovies()))
   
  }

}
