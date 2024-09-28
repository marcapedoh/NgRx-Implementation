import { createAction, props } from "@ngrx/store";
import { Movie } from "src/app/models/Movie";


export const getMovies= createAction('[Movie] get movies');
export const addMovies= createAction('[Movie] get movies', props<{movie:Movie}>)
export const addMoviesWithoutProps= createAction('[Movie] get movies',(movie:Movie)=> movie )

export const addMoviesSuccess=createAction('[Movie] get movies', props<{movie:Movie}>())