import { Component } from '@angular/core';
import { Movie } from './models/Movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  movies:Movie[]=[];
  newMovie:Movie=new Movie();
  constructor(){

  }
  addNewMovies():void{
    
  }
}
