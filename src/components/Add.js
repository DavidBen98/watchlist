import { useEffect, useState, useMemo } from "react";
import ResultCard from "./ResultCard";
import InfiniteScroll from "react-infinite-scroll-component";
import debounceFunction from "./debounceFunction";
import Loader from "./Loader";
import { useModal } from "../hooks/useModal";
import Modal from "./Modal";

const Add = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    const [isOpenModal1,openModal1,closeModal1] = useModal(false);
    const [isOpenModal2,openModal2,closeModal2] = useModal(false);

    const abrirModal = (type) => {
        if (type === "watchlist"){
            openModal1();
        } else {
            openModal2();
        }
    }

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
                                setIsLoading(false);
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
        if (page === 1){
            setIsLoading(true);
        }
        debouncedFetchData(query, page);
    }, [query,page]);

    if (results.length === 0) return <Loader margin={true}/>;

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

                {isLoading? 
                    <Loader /> : 
                    <InfiniteScroll
                        dataLength={results.length}
                        hasMore={hasMore}
                        next={() => setPage((prevPage) => prevPage + 1)}
                    >
                            
                        {results.length > 0 && (
                            <ul className="add__movies">
                                {results.map((movie) => (
                                    <li key={movie.id}>
                                        <ResultCard movie={movie} abrirModal={abrirModal}/>
                                    </li>
                                ))}
                            </ul>
                        )}

                        <Modal isOpen={isOpenModal1} closeModal={closeModal1} type={"watchlist"} />
                        <Modal isOpen={isOpenModal2} closeModal={closeModal2} type={"watched"} />
                    </InfiniteScroll>
                    
                }
            </div>
        </div>
    );
}
 
export default Add;