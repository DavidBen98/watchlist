import MovieControls from "./MovieControls";
import Poster from "../Poster.jpg";

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
                    <div className="card" style={{border: "3px solid var(--secondary)"}}>
                        <div className="card__overlay" onClick={()=> handleClick(movie.id)}></div>

                        {movie.poster_path ? (
                            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                            alt={`${movie.title} Poster`}/>
                            ) : (
                            <img src={Poster} alt={`${movie.title} Poster`}/>
                        )}

                        <MovieControls type={type} movie={movie}/>
                    </div>
                ) : (
                    <div className="card" >
                        <div className="card__overlay" onClick={()=> handleClick(movie.id)}></div>

                        {movie.poster_path ? (
                            <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} 
                            alt={`${movie.title} Poster`} />
                            ) : (
                            <img src={Poster} alt={`${movie.title} Poster`}/>
                        )}

                        <MovieControls type={type} movie={movie}/>
                    </div>
                )
                
            }

        </>
    );
}
 
export default MovieCard;