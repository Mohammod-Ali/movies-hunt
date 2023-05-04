import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

const Ticket = ({movieDetails}) => {
    console.log(movieDetails)
    const handleBooking = () =>{
        alert('booking confirm')
    }
    return (
        <div>
            <h1>Booking Your Ticket</h1>
            <Card className='d-flex align-items-center justify-content-center'>
      <Card.Img className='d-flex align-items-center justify-content-center' style={{ width: '18rem' }} variant="top" src={movieDetails?.show?.image?.medium} />
      <Card.Body>
        <Card.Title>{movieDetails?.show?.name}</Card.Title>
        <div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Movie Name</Form.Label>
        <Form.Control type="text" placeholder={movieDetails?.show?.name} disabled />
      </Form.Group>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        
      </Form.Group>
     
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="text" placeholder='Type your name' disabled />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      
      <Button onClick={handleBooking} variant="primary" type="submit">
        Booking
      </Button>
     
    </Form>
   
        </div>
        
      </Card.Body>
      <Link to={'/'}><Button variant="primary">Back</Button></Link>
    </Card>
        </div>
    );
};

export default Ticket;