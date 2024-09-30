import { createSelector } from "@ngrx/store";
import { MovieState } from "../reducers/movie.reducers";
import { Movie } from "src/app/models/Movie";

export const movieSelector= createSelector(
    (state:MovieState)=> state.movies,
    (movies:ReadonlyArray<Movie>)=>movies
)

export const greater=(amount:number)=>
    createSelector(movieSelector,(movies)=>{
        return movies.filter((movie:Movie)=> movie.earning>=amount);
    })