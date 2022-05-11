import { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import MovieCard from "./MovieCard";
import { BiCameraMovie } from "react-icons/bi";

const initialState = [];

const Watched = () => {
    const { watched, removeMoviesFromWatched, addMoviesToWatchlist } = useContext(GlobalContext);

    const [moviesselect, setMoviesselect] = useState(initialState);

    const seleccionar = (id) => {
        let exist = moviesselect.includes (id);

        if (exist){
            let movies = moviesselect.filter((el) => el !== id);
            setMoviesselect(movies);
        } else {
            setMoviesselect([...moviesselect, id]);
        }
    }

    useEffect(() => {
        if (moviesselect.length > 0){
            setMoviesselect(initialState);
        }
    }, [watched]);

    return ( 
        <div className="movie">
            <div className="movie__container">
                <div className="movie__header">
                    <h1 className="movie__heading">
                        Watched Movies
                    </h1>

                    <span className="movie__count">
                        {watched.length} {watched.length === 1? "Movie" : "Movies"}
                        <BiCameraMovie />
                    </span>
                </div>

                <div className="movie__event">
                    <p className="movie__select">
                        <span>
                            {moviesselect.length} selected film
                        </span>
                    </p>
                    <div className="movie__buttons">

                    {moviesselect.length > 0 ? 
                        (
                            <>
                                <button 
                                    className="btn" 
                                    onClick={() => 
                                        {
                                            addMoviesToWatchlist(moviesselect); 
                                            removeMoviesFromWatched(moviesselect);
                                            setMoviesselect (initialState);
                                        }
                                    }
                                    >
                                    Move to Watchlist
                                </button>
                                <button 
                                    className="btn"
                                    onClick={() => 
                                        {
                                            removeMoviesFromWatched(moviesselect); 
                                            setMoviesselect (initialState);
                                        }
                                    }
                                    >
                                    Remove to Watched
                                </button>
                            </>
                        ) : (
                            <>
                                <button className="btn" disabled={true}>Move to Watchlist</button>
                                <button className="btn" disabled={true}>Remove to Watched</button>
                            </>
                        )
                    }
                    </div>
                </div>

                {watched.length > 0 ? (
                    <div className="movie__grid">
                        {watched.map((movie) => (
                            <MovieCard movie={movie} seleccionar={seleccionar} moviesselect={moviesselect} type="watched" />
                        ))}
                    </div>
                ) : (
                    <h2 className="movie__empty">No movies in watched</h2>
                )}
            </div>
        </div>
    );
}
 
export default Watched;