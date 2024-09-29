import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Movie } from '../models/Movie';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url='api/movies/';


  constructor(private http:HttpClient) { }

  getMovies():Observable<ReadonlyArray<Movie>>{
    return this.http.get<ReadonlyArray<Movie>>(this.url).pipe(
      catchError((error:HttpErrorResponse)=>{
        console.error(error);
        return throwError(error)
      })
    )
  }

  addMovies(movie:Movie):Observable<Movie>{
   
    return this.http.post<Movie>(this.url,movie).pipe(
      catchError((error:HttpErrorResponse)=>{
        console.error(error);
        return throwError(error);
      })
    )
  }
}
