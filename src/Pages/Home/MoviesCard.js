import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const MoviesCard = ({movie, setMovieDetails}) => {
    // console.log(movie)
    const handleMoviesDetails = (movie) =>{
      setMovieDetails(movie)
    }
    return (
        <div className='g-col-4 m-2'>
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.show.image?.medium} />
      <Card.Body>
        <Card.Title>{movie.show.name}</Card.Title>
        <Card.Text>
          {movie.show.summary.slice(0, 200)}{'...'}
        </Card.Text>
        <Link to={'/ticket'}><Button onClick={() =>handleMoviesDetails(movie)} variant="primary">Ticket Booking</Button></Link>
      </Card.Body>
    </Card>
        </div>
    );
};

export default MoviesCard;