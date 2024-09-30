import { createReducer, on } from "@ngrx/store";
import { Movie } from "src/app/models/Movie";
import {  addMoviesWithoutProps, deleteMovieSuccess, getMovies, getMoviesSuccess, updateMovieSuccess } from "../actions/movie.action";
export interface MovieState{
    movies:ReadonlyArray<Movie>;
}

const initialState: ReadonlyArray<Movie> =[]

export const movieReducer=createReducer(
    initialState,
    on(getMoviesSuccess, (state, { movies }) => [...movies]),
    
    on(addMoviesWithoutProps, (state, { movie }) => [...state, movie]
    ),
    on(updateMovieSuccess,(state,{movie})=>{
        const movies= state.map((m)=>{
            if(m.id===movie.id){
                return movie;
            }
            return m;
        })
        return movies;
    }),
    on(deleteMovieSuccess,(state,{movieId})=>state.filter((movie)=>movie.id!==movieId))
)