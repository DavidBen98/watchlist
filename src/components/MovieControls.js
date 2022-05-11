import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";

const MovieControls = ({ movie, type, seleccionar}) => {
    const { 
        removeMovieFromWatchList, 
        addMovieToWatched,
        moveToWatchList,
        removeFromWatched,
    } = useContext(GlobalContext);

    return ( 
        <div className="card__controls">
            {type === 'watchlist' && (
                <>
                    <button 
                        className="card__btn"
                        onClick={()=> {
                            addMovieToWatched(movie);
                        }}
                    >
                        <i className="fa-fw far fa-eye">
                            <FaEye />
                        </i>
                    </button>

                    <button 
                        className="card__btn"
                        onClick={()=> {
                            removeMovieFromWatchList(movie.id);
                        }}
                    >
                        <i className="fa-fw fa fa-times">
                            <FaTimes />
                        </i>
                    </button>
                </>
            )}

            {type === 'watched' &&
            (
                <>
                    <button 
                        className="card__btn"
                        onClick={()=> moveToWatchList(movie)}
                    >
                        <i className="fa-fw far fa-eye-slash">
                            <FaEyeSlash />
                        </i>
                    </button>

                    <button 
                        className="card__btn"
                        onClick={()=> removeFromWatched(movie.id)}
                    >
                        <i className="fa-fw fa fa-times">
                            <FaTimes />
                        </i>
                    </button>
                </>
            )}
        </div>
    );
}
 
export default MovieControls;