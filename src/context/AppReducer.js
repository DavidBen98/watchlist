export default (state, action) => {
    switch(action.type) {
        case "ADD_MOVIE_TO_WATCHLIST":
            return {
                ...state,
                watchlist: [action.payload, ...state.watchlist]
            }
        case "REMOVE_MOVIE_FROM_WATCHLIST":
            return {
                ...state,
                watchlist: state.watchlist.filter(movie => movie.id !== action.payload)
            }
        case "REMOVE_MOVIES_FROM_WATCHLIST":
            return {
                ...state,
                watchlist: state.watchlist.filter ((movie) => (
                                action.payload.every((select) => (
                                    movie.id !== select
                                ))
                            ))
            }
        case "REMOVE_MOVIES_FROM_WATCHED":
            return {
                ...state,
                watched: state.watched.filter ((movie) => (
                                action.payload.every((select) => (
                                    movie.id !== select
                                ))
                            ))
            }
        case "ADD_MOVIE_TO_WATCHED":
            return {
                ...state,
                watchlist: state.watchlist.filter(
                    (movie) => movie.id !== action.payload.id
                ),
                watched: [action.payload, ...state.watched],
            }
        case "ADD_MOVIES_TO_WATCHED":
            let newWatched = [];

            for (let i = 0; i < action.payload.length; i++){
                for (let j = 0; j < state.watchlist.length; j++){
                    if (state.watchlist[j].id === action.payload[i]){
                        newWatched.push(state.watchlist[j]);
                    }
                }
            }
        
            newWatched = newWatched.concat(state.watched);

            return {
                ...state,
                watched: newWatched
            }
        case "ADD_MOVIES_TO_WATCHLIST":
        let newWatchlist = [];

        for (let i = 0; i < action.payload.length; i++){
            for (let j = 0; j < state.watched.length; j++){
                if (state.watched[j].id === action.payload[i]){
                    newWatchlist.push(state.watched[j]);
                }
            }
        }
        
        newWatchlist = newWatchlist.concat(state.watchlist);

        return {
            ...state,
            watchlist: newWatchlist
        }
        case "MOVE_TO_WATCHLIST" :
            return {
                ...state,
                watched: state.watched.filter ( movie => movie.id !== action.payload.id),
                watchlist: [action.payload, ...state.watchlist]
            }
        case "REMOVE_FROM_WATCHED" :
            return {
                ...state,
                watched: state.watched.filter (movie => movie.id !== action.payload)
            }
        default: 
            return state;

    }
}