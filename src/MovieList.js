import React from 'react'
import { Container, Row , Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Moviecard from './MovieCard'

const Movielist = ({list}) => {
    return (
        <Container>
        <Row>
        {list.length ? 
        list.map( (movie,index)=>
                <Col md={4} xs={12}>
                    <Link to={`/${movie.title}`}> 
                    <Moviecard key={index} movie={movie}> </Moviecard> 
                    </Link>
                </Col>) 
        : <h2 style={{color:"white"}}>No Movie Found</h2>}
        </Row>
        </Container>
    )
}
export default Movielist