
import {ActionReducer,ActionReducerMap, MetaReducer} from '@ngrx/store'
import {movieReducer, MovieState} from './reducers/movie.reducers'
import { routerReducer } from '@ngrx/router-store'


export const reducers:ActionReducerMap<MovieState>={
    movies:movieReducer,
    router:routerReducer
}

const debugMeta=(reducer:ActionReducer<any>):ActionReducer<any>=>{
    return (state,action)=>{
        console.log('state',state);
        console.log('action',action);

        return reducer(state,action)
    }
}

export const metaReducer:MetaReducer<MovieState>[]=[debugMeta]