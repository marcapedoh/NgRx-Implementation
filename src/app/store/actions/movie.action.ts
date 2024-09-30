import { createAction, props } from "@ngrx/store";
import { Movie } from "src/app/models/Movie";


export const getMovies= createAction('[Movie] Get movie');
export const getMoviesSuccess= createAction('[Movie] Get movie success',(movies:ReadonlyArray<Movie>)=>({movies}));
export const addMovies= createAction('[Movie] Add movie', props<{movie:Movie}>)
export const addMoviesWithoutProps= createAction('[Movie] Add movie',(movie:Movie)=> ({movie}) )

// Action pour signaler l'échec de la récupération des films
export const getMoviesFaillure = createAction(
  '[Movie] Get Movie Failure',
  props<{ error: any }>() // Tu peux inclure des informations d'erreur si nécessaire
);

export const addMoviesSuccess=createAction('[Movie] Add movie success', //props<{movie:Movie}>()
    (movie:Movie)=> ({movie})    
)

export const deleteMovie=createAction('[Movie] Delete movie', (movieId:number)=>({movieId}))

export const deleteMovieSuccess=createAction('[Movie] Delete movie success', (movieId:number)=> ({movieId}));

export const updateMovie= createAction('[Movie] Update movie',(movie:Movie)=> ({movie}));

export const updateMovieSuccess= createAction('[Movie] Update movie success',(movie:Movie)=> ({movie}))