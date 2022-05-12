import { useEffect, useState } from "react";
import ResultCard from "./ResultCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDebounce } from "../hooks/useDebounce";

const Add = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const getMovie = (inputValue, changePage) => {
        let location = "search";
        let numberPage = (changePage? page : "1");
        let url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&query=${inputValue}&page=${numberPage}`;

        if (inputValue === "" || inputValue === undefined){
            url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=${numberPage}`;
        }

        fetch(url)
        .then(res => res.json()).then((data)=> {
            if(!data.errors){
                if (changePage){
                    setResults((prevResults) => prevResults.concat(data.results));
                    setHasMore(data.page < data.total_pages);
                } else {
                    setResults(data.results);
                }
            } else {
                setResults([]);
            }
        });
    }

    useEffect(() => {
        getMovie(query, true);
    }, [page]);

    useEffect(() => {
        getMovie(query, false);
    }, [query]);

    return ( 
        <div className="add">
            <div className="add__container">
                <div className="add__content">
                    <div className="add__input">
                        <input 
                            className="add__search"
                            type="text" 
                            placeholder="Search for a movie"
                            value={query}
                            onChange={(e)=> {
                                return setQuery(e.target.value);
                            }}
                        />
                    </div>
                </div>
                <InfiniteScroll
                    dataLength={results.length}
                    hasMore={true}
                    next={() => setPage((prevPage) => prevPage + 1)}
                >
                    {results.length > 0 && (
                        <ul className="add__movies">
                            {results.map((movie) => (
                                <li>
                                    <ResultCard movie={movie} key={movie.id}/>
                                </li>
                            ))}
                        </ul>
                    )}
                </InfiniteScroll>

            </div>
        </div>
    );
}
 
export default Add;