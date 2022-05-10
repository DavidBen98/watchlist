import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import MovieCard from "./MovieCard";
import { BiCameraMovie } from "react-icons/bi";

const initialState = [];
const Watchlist = () => {
    const {watchlist , removeMoviesFromWatchList, addMoviesToWatched} = useContext(GlobalContext);
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

    return ( 
        <>
            <div className="movie">
                <div className="movie__container">
                    <div className="movie__header">
                        <h1 className="movie__heading">
                            My Watchlist
                        </h1>

                        <span className="movie__count">
                            {watchlist.length} {watchlist.length === 1? "Movie" : "Movies"}
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
                                        className="btn btn--margin" 
                                        onClick={() => 
                                            {
                                                addMoviesToWatched(moviesselect); 
                                                removeMoviesFromWatchList(moviesselect);
                                                setMoviesselect (initialState);
                                            }
                                        }
                                    >
                                        Move to Watched
                                    </button>
                                    <button 
                                        className="btn"
                                        onClick={() => 
                                            {
                                                removeMoviesFromWatchList(moviesselect); 
                                                setMoviesselect (initialState);
                                            }
                                        }
                                    >
                                        Remove to Watchlist
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button className="btn btn--margin" disabled={true}>Move to Watched</button>
                                    <button className="btn" disabled={true}>Remove to Watchlist</button>
                                </>
                            )
                        }
                        </div>
                    </div>

                    {watchlist.length > 0 ? (
                        <div className="movie__grid">
                            {watchlist.map((movie) => (
                                <MovieCard movie={movie} seleccionar={seleccionar} moviesselect={moviesselect} type="watchlist" />
                            ))}
                        </div>
                    ) : (
                        <h2 className="movie__empty">No movies in watchlist</h2>
                    )}
                    
   
                </div>
            </div>
            
        </>
    );
}

export default Watchlist;