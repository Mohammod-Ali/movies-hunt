import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const MoviesCard = ({movie}) => {
    console.log(movie)
    return (
        <div className='g-col-4'>
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.show.image?.medium} />
      <Card.Body>
        <Card.Title>{movie.show.name}</Card.Title>
        <Card.Text>
          {movie.show.summary}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </div>
    );
};

export default MoviesCard;