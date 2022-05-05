import MovieControls from "./MovieControls";

const MovieCard = ({ movie, type }) => {
    return ( 
        <div className="card">
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
    );
}
 
export default MovieCard;