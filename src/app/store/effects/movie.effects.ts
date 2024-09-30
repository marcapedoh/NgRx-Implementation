import { Actions, createEffect, ofType } from "@ngrx/effects";
import { addMovies, addMoviesSuccess, addMoviesWithoutProps, deleteMovie, deleteMovieSuccess, getMovies, getMoviesFaillure, getMoviesSuccess, updateMovie, updateMovieSuccess } from "../actions/movie.action";
import { catchError,concatMap,EMPTY,EmptyError, exhaustMap, map, mergeMap, of, tap } from "rxjs";
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
            catchError(() => EMPTY)
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
            catchError( () => EMPTY)
        ))
    ))

    updateMovie$=createEffect(()=>
    this.action$.pipe(
        ofType(updateMovie),
        concatMap(({movie})=>
        this.dataService.updateMovies(movie).pipe(
            map(()=>updateMovieSuccess(movie)),
            catchError(()=> EMPTY)
        ))
    ))

    deleteMovie$=createEffect(()=>
    this.action$.pipe(
        ofType(deleteMovie),
        mergeMap(({movieId})=>
        this.dataService.deleteMovie(movieId).pipe(
            map(()=> deleteMovieSuccess(movieId)),
            catchError(()=>EMPTY)
        ))
    ))

    
}