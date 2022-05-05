import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const ResultCard = ({ movie }) => {
    const {
        addMovieToWatchList,
        addMovieToWatched,
        watchlist,
        watched
    } = useContext(GlobalContext);

    let storedMovie = watchlist.find ((o) => o.id === movie.id);
    let storedMovieWatched = watched.find ((o) => o.id === movie.id);

    const watchlistDisabled = storedMovie ? true : storedMovieWatched? true : false;

    const watchedDisabled = storedMovie ? true : storedMovieWatched? true : false;
    return ( 
        <div className="resultCard">
            <div className="resultCard__wrapper">
                {movie.poster_path ? (
                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={`${movie.title} Poster`} />
                ) : (
                    <div className="card__filler">
                    </div>
                )}
            </div>

            <div className="resultCard__info">
                <div className="resultCard__header">
                    <h3 className="resultCard__title">
                        {movie.title}
                    </h3>
                    <h4 className="resultCard__release">
                        {movie.release_date ?movie.release_date.substring(0, 4) : "-" }
                    </h4>
                </div>
            </div>

            <div className="resultCard__controls">
                <button 
                    className="btn"
                    disabled={watchlistDisabled}
                    onClick={() => addMovieToWatchList(movie)}
                >
                    Add to Watchlist
                </button>

                <button 
                    className="btn"
                    disabled={watchedDisabled}
                    onClick={() => addMovieToWatched(movie)}
                >
                    Add to Watched
                </button>
            </div>
        </div>
    );
}
 
export default ResultCard;