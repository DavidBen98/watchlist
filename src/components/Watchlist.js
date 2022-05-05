import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import MovieCard from "./MovieCard";
import { BiCameraMovie } from "react-icons/bi";

function Watchlist() {
    const {watchlist} = useContext(GlobalContext);
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

                    {watchlist.length > 0 ? (
                        <div className="movie__grid">
                            {watchlist.map((movie) => (
                                <MovieCard movie={movie} type="watchlist" />
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