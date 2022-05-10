import { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

const initialState = {
    watchlist: localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem('watchlist')): [],
    watched: localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')): [],
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        localStorage.setItem('watchlist', JSON.stringify(state.watchlist));
        localStorage.setItem('watched', JSON.stringify(state.watched));
    }, [state]);

    const addMovieToWatchList = (movie) => {
        dispatch({type: "ADD_MOVIE_TO_WATCHLIST", payload: movie});
    }

    const removeMovieFromWatchList = (id) => {
        dispatch({type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id});
    }

    const removeMoviesFromWatchList = (movies) => {
        dispatch({type: "REMOVE_MOVIES_FROM_WATCHLIST", payload: movies});
    }

    const removeMoviesFromWatched = (movies) => {
        dispatch({type: "REMOVE_MOVIES_FROM_WATCHED", payload: movies});
    }

    const addMovieToWatched = (movie) => {
        dispatch({type: "ADD_MOVIE_TO_WATCHED", payload: movie});
    }

    const addMoviesToWatched = (movies) => {
        dispatch({type: "ADD_MOVIES_TO_WATCHED", payload: movies});
    }

    const addMoviesToWatchlist= (movies) => {
        dispatch({type: "ADD_MOVIES_TO_WATCHLIST", payload: movies});
    }

    const moveToWatchList =  (movie) => {
        dispatch({type: 'MOVE_TO_WATCHLIST', payload: movie});
    }

    const removeFromWatched = (id) => {
        dispatch({ type: "REMOVE_FROM_WATCHED", payload: id});
    }

    return (
        <GlobalContext.Provider 
            value={{
                watchlist: state.watchlist, 
                watched: state.watched,
                addMovieToWatchList,
                removeMovieFromWatchList,
                addMovieToWatched,
                moveToWatchList,
                removeFromWatched,
                removeMoviesFromWatchList,
                addMoviesToWatched,
                addMoviesToWatchlist,
                removeMoviesFromWatched,
            }}>

            {props.children}
        </GlobalContext.Provider>
    )
}