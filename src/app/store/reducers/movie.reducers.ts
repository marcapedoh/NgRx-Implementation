import { createReducer, on } from "@ngrx/store";
import { Movie } from "src/app/models/Movie";
import { addMoviesSuccess, addMoviesWithoutProps, getMovies, getMoviesSuccess } from "../actions/movie.action";

export interface MovieState{
    movies:ReadonlyArray<Movie>;
}

const initialState: MovieState = {
    movies: []
};

export const movieReducer=createReducer(
    initialState,
    on(getMoviesSuccess, (state, { movies }) => ({
        ...state,
        movies: [...movies]
    })),
    
    on(addMoviesWithoutProps, (state, { movie }) => ({
        ...state,
        movies: [...state.movies, movie]
    }))
)