import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieRating from './Rating';
const Moviecard = ({movie}) => {
  return (
    <div className="movie-card">
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.posterUrl} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text >
        {movie.description}
        </Card.Text>
        <MovieRating MovieRating={movie.rate} isMovieRating={true}/>
        <Button  style={{width: '10rem'}} variant="primary" >{movie.trailer}</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Moviecard