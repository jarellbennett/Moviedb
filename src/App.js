import './App.css';
import Movies from './components/Movies.js';
import React, {useEffect, useState} from "react";

const SEARCh_API = "https://api.themoviedb.org/3/search/movie?api_key=4e7fdbfdfbc064af21f53bb10550c58b&language=en-US&page=1&include_adult=false";



const POPULAR_API = "https://api.themoviedb.org/3/movie/popular?api_key=4e7fdbfdfbc064af21f53bb10550c58b&language=en-US&page=1"

function App() {
  const [movies, setMovies] =useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(POPULAR_API)
      .then((res) => res.json())
      .then((data)=> {
        setMovies(data.results);
      })
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    fetch(SEARCh_API + searchTerm)
      .then((res) => res.json())
      .then((data)=> {
        setMovies(data.results);
      });
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <header>
        <form onSubmit={handleOnSubmit}>
          <input 
              className='search' 
              type="text" 
              placeholder='Search...'
              value={searchTerm}
              onChange={handleOnChange} 
            />
        </form>
      </header>
      <div className='movie-conatiner'>
        {movies.length > 0 && 
          movies.map((movie) =>
          <Movies key= {movie.id} {...movie} />
          )}
      </div>
    </>
  )
}

export default App;
