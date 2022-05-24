import { useEffect, useState, useMemo } from "react";
import ResultCard from "./ResultCard";
import InfiniteScroll from "react-infinite-scroll-component";
import debounceFunction from "./debounceFunction";
import Loader from "./Loader";

const Add = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    const debouncedFetchData = useMemo (function () {
        function getMovie (inputValue, pag) {

            let url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&query=${inputValue}&page=${pag}`;
            
            if (inputValue === "" || inputValue === undefined){
                url = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=${pag}`;
            }
        
            fetch(url)
                .then(res => res.json())
                    .then((data)=> {
                        if(!data.errors){
                            if (pag !== 1){
                                setResults((prevResults) => prevResults.concat(data.results));
                                setHasMore(data.page < data.total_pages);
                            } else {
                                setResults(data.results);
                            }
                        } else {
                            setResults([]);
                        }
                    }
            );
        }

        return debounceFunction(getMovie, 500);
    }, []);  

    useEffect(() => {
        debouncedFetchData(query, page);
    }, [query,page]);

    if (results.length === 0) return <Loader />;

    return ( 
        <div className="add">
            <div className="add__container">
                <div className="add__content">
                    <div className="add__input">
                        <input 
                            className="add__search"
                            type="text" 
                            placeholder="Search for a movie"
                            aria-label="Search movie"
                            value={query}
                            onChange={(e)=> {
                                setPage (1);
                                setQuery(e.target.value);
                            }}
                        />
                    </div>
                </div>
                <InfiniteScroll
                    dataLength={results.length}
                    hasMore={hasMore}
                    next={() => setPage((prevPage) => prevPage + 1)}
                >
                    {results.length > 0 && (
                            <ul className="add__movies">
                                {results.map((movie) => (
                                    <li key={movie.id}>
                                        <ResultCard movie={movie}/>
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