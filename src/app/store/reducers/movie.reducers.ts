import { createReducer, on } from "@ngrx/store";
import { Movie } from "src/app/models/Movie";
import { getMovies } from "../actions/movie.action";

export interface MovieState{
    movies:ReadonlyArray<Movie>;
}

const initialState:ReadonlyArray<Movie>=[];

export const movieReducer=createReducer(initialState,on(getMovies,(state)=>[...state]))