import { createSelector } from "@ngrx/store";
import { MovieState } from "../reducers/movie.reducers";
import { Movie } from "src/app/models/Movie";

export const movieSelector= createSelector(
    (state:MovieState)=> state.movies,
    (movies:ReadonlyArray<Movie>)=>movies
)
 const routeParams= createSelector(
    (state:MovieState)=> state.router.state,
    (state)=>state.params
 )

export const greater=(amount:number)=>
    createSelector(movieSelector,(movies)=>{
        return movies.filter((movie:Movie)=> movie.earning>=amount);
    })

export const movie= createSelector(
    movieSelector,
    routeParams,
    (movies:ReadonlyArray<Movie>,{id})=>{
        return movies.filter((m)=>m.id==Number(id))[0];
    }
)