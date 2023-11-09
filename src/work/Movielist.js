import React from 'react'
import Moviecard from './Moviecard'

const Movielist = ({movies,inputSearch,rating}) => {
  return (
    <div className="movie-list">
        {movies
        .filter(movie =>movie.title.toUpperCase().includes(inputSearch.toUpperCase())
        && movie.rate >=rating)
        .map((movie)=><Moviecard movie={movie} key={movie.id}/>)}
    </div>
  )
}

export default Movielist