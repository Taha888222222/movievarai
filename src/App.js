
import { useState } from 'react';
import './App.css';
import moviesData from './work/Data';
import Movielist from './work/Movielist';
import Addmovie from './work/Addmovie';
import FilterByName from './work/FilterByName';
import FilterByRate from './work/Rating';

function App() {
  const [movies,setmovies]= useState(moviesData)
  const [inputSearch,setInputSearch] = useState("")
  const [rating,setRating] = useState(1)
  const add =(newMovie)=>{
    setmovies([...movies,newMovie])
  }
  return (
    <div className="App">
      <h1 className='az'>best movies</h1>
      <FilterByName inputSearch={inputSearch} setInputSearch={setInputSearch}/>
      <FilterByRate isMovieRating={false} rating={rating} setRating={setRating}/>
      <Movielist movies={movies} inputSearch={inputSearch} rating={rating}/>
      <Addmovie add={add} />
    </div>
  );
}

export default App;
