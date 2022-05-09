import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import MovieCard from "./MovieCard";
import { BiCameraMovie } from "react-icons/bi";

const Watched = () => {
    const { watched } = useContext(GlobalContext);
    const [moviesselect, setMoviesselect] = useState([]);

    const seleccionar = (id, evento) => {
        if (evento === "add"){
            setMoviesselect( 
                [
                ...moviesselect, 
                id
            ]);
        } else {
            let movies = moviesselect.filter((el) => el !== id);
            setMoviesselect(movies);
        }
    }

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
                    {moviesselect.length > 0 ? 
                        (
                            <>
                                <button className="btn btn--margin">Move to Watched</button>
                                <button className="btn">Remove to Watchlist</button>
                            </>
                        ) : (
                            <>
                                <button className="btn btn--margin" disabled={true}>Move to Watched</button>
                                <button className="btn" disabled={true}>Remove to Watchlist</button>
                            </>
                        )
                    }
                </div>

                {watched.length > 0 ? (
                    <div className="movie__grid">
                        {watched.map((movie) => (
                            <MovieCard movie={movie} seleccionar={seleccionar} type="watched" />
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