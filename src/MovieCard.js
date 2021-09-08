import React from 'react'
import { Card,Container,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import StarRatingComponent from 'react-star-rating-component'


const MovieCard = ({movie}) => {
    return (
        <Container>
        <Link to={`/trailer/${movie.id}`}>
            <Col className="bottom">
                <Card>
                    <Card.Img variant="top" src={movie.posterUrl} />
                    <Card.Body >
                        <Card.Title>{movie.title}</Card.Title>
                        <Card.Text>{movie.description}</Card.Text>
                    </Card.Body>
                    <StarRatingComponent value={movie.rate} />
                </Card>
            </Col>
        </Link>    
        </Container>

    )
}

export default MovieCard
