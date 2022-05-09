import MovieControls from "./MovieControls";
import { useState, useEffect } from "react";

const MovieCard = ({ movie, type, seleccionar, moviesselect }) => {
    const handleClick = (id) => {
        seleccionar(id);
    }

    let select = false;
    if (movie !== undefined && moviesselect !== undefined){
        select = moviesselect.includes (movie.id);
    }

    return (
        <>
            {select?
                (
                    <div className="card" onClick={()=> handleClick(movie.id)} style={{border: "3px solid var(--secondary)"}}>
                        <div className="card__overlay"></div>

                        {movie.poster_path ? (
                            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                            alt={`${movie.title} Poster`} />
                            ) : (
                                <div className="card__filler">
                            </div>
                        )}

                        <MovieControls type={type} movie={movie} />
                    </div>
                ) : (
                    <div className="card" onClick={()=> handleClick(movie.id)} >
                        <div className="card__overlay"></div>

                        {movie.poster_path ? (
                            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                            alt={`${movie.title} Poster`} />
                            ) : (
                                <div className="card__filler">
                            </div>
                        )}

                        <MovieControls type={type} movie={movie} />
                    </div>
                )
                
            }

        </>
    );
}
 
export default MovieCard;