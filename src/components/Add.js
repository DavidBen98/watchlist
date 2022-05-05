import { useState } from "react";
import ResultCard from "./ResultCard";

const Add = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const onChange = e => {
        e.preventDefault();

        setQuery(e.target.value);

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&query=${e.target.value}`)
        .then(res => res.json()).then((data)=> {
            if(!data.errors){
                setResults(data.results);
            } else {
                setResults([]);
            }
        });
    }

    return ( 
        <div className="add">
            <div className="add__container">
                <div className="add__content">
                    <div className="add__input">
                        <input 
                            type="text" 
                            placeholder="Search for a movie"
                            value={query}
                            onChange={onChange} 
                        />
                    </div>
                </div>

                {results.length > 0 && (
                    <ul className="add__movies">
                        {results.map((movie) => (
                            <li key={movie.id}>
                                <ResultCard movie={movie}/>
                            </li>
                        ))}
                    </ul>
                )}

            </div>
        </div>
    );
}
 
export default Add;