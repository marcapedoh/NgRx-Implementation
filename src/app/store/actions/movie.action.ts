import { createAction, props } from "@ngrx/store";
import { Movie } from "src/app/models/Movie";


export const getMovies= createAction('[Movie] get movies');
export const getMoviesSuccess= createAction('[Movie] get movies success',(movies:ReadonlyArray<Movie>)=>({movies}));
export const addMovies= createAction('[Movie] get movies', props<{movie:Movie}>)
export const addMoviesWithoutProps= createAction('[Movie] get movies',(movie:Movie)=> ({movie}) )

// Action pour signaler l'échec de la récupération des films
export const getMoviesFaillure = createAction(
  '[Movie] Get Movies Failure',
  props<{ error: any }>() // Tu peux inclure des informations d'erreur si nécessaire
);

export const addMoviesSuccess=createAction('[Movie] get movies', //props<{movie:Movie}>()
    (movie:Movie)=> ({movie})    
)