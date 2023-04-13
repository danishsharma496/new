import searchLogo from './search.svg';
import './App.css';
import { useState , useEffect } from 'react';
import MovieCard from './MovieCard';


// dd9693d6
 const API_URL = 'https://www.omdbapi.com?apikey=dd9693d6';
const App = () => {

  const [searchTerm , setSearchTerm]=useState("");
  const [movies , setMovies]=useState([]);

  
  useEffect(()=>{
    searchMovie("spiderman");
  }, []);

  const searchMovie= (title)=>{
    fetch(`${API_URL}&s=${title}`)
    .then(resp => resp.json())
    .then(data => {
      setMovies(data.Search)
    })
    .catch(error => console.error(error));
  
  }
  // react state can only be changed using its own setter function


 
  return (
    <div className='app'>
    <h1>Movie Land</h1>
    <div className='search'>
      <input
            value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}
            placeholder="Search for movies "
     /> 
      <img 
        src={searchLogo}
        alt = "search"
        onClick={()=>searchMovie(searchTerm)}
      />
    </div>
  n


     

     {movies?.length > 0 ? (
      <div className='container'>
        {movies.map((movie)=>(
          <MovieCard movie={movie}/>
        ))}
      </div>):
      (
        <div className='empty'>
          <h2>No movies found</h2>
        </div>
      )

    } 
    </div>


  );
}

export default App;
