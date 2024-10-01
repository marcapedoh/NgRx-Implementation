import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../models/Movie';
import { select, Store } from '@ngrx/store';
import { MovieState } from '../store/reducers/movie.reducers';
import { movieSelector } from '../store/selector/movie.selector';
import { Subject, takeUntil } from 'rxjs';
import { deleteMovie, updateMovie } from '../store/actions/movie.action';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  movies:Movie[]=[];
  movies$ = this.store.pipe(select(movieSelector));
  done=new Subject();
  selectedIndex:number |null=null;
  earning=0
  ngOnInit(): void { 
    this.movies$.pipe(takeUntil(this.done))
    .subscribe((data)=> (this.movies=JSON.parse(JSON.stringify(data))))
  }

  constructor(private store:Store<MovieState>) {
    
  }

  enableEdit(movie:Movie,index:number):void{
    console.log(index)
    this.selectedIndex=index;
    this.earning=movie.earning;
  }

  cancelEdit():void{
    this.selectedIndex=null;
  }

  update(movie:Movie):void{
    const m={...movie};
    m.earning=this.earning;
    this.store.dispatch(updateMovie(m));
    this.selectedIndex=null;
  }

  deleteMovie(movieId:number):void{
    this.store.dispatch(deleteMovie(movieId))
  }

  


}
