import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import MovieCard from "./MovieCard";
import { BiCameraMovie } from "react-icons/bi";

const Watched = () => {
    const { watched } = useContext(GlobalContext);

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

                {watched.length > 0 ? (
                    <div className="movie__grid">
                        {watched.map((movie) => (
                            <MovieCard movie={movie} type="watched" />
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