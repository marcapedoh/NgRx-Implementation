import { Actions, createEffect, ofType } from "@ngrx/effects";
import { addMovies, addMoviesSuccess, addMoviesWithoutProps, getMovies, getMoviesFaillure, getMoviesSuccess } from "../actions/movie.action";
import { catchError,concatMap,EmptyError, exhaustMap, map, of, tap } from "rxjs";
import { Injectable } from "@angular/core";
import { DataService } from "src/app/service/data.service";
import {  } from "rxjs";

@Injectable()
export class MovieEffects{
    loadMovie$=createEffect(()=>
    this.action$.pipe(
        ofType(getMovies),
        exhaustMap(()=>
        this.dataService.getMovies().pipe(
            map((movies)=> getMoviesSuccess(movies)),
            catchError((error) => of(getMoviesFaillure({error})))
        ))
    ))

    constructor(private action$:Actions,private dataService:DataService){

    }

    addMovie$=createEffect(()=>
    this.action$.pipe(
        ofType(addMoviesWithoutProps),
        tap((movie)=>console.log(movie)),
        concatMap(({movie})=>
        this.dataService.addMovies(movie).pipe(
            map((newMovie)=>addMoviesSuccess(newMovie)),
            catchError( (error) => of(getMoviesFaillure({error})))
        ))
    ))

    
}