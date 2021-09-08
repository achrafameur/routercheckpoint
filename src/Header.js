import {Navbar,Nav,Form,Button,FormControl,Container} from 'react-bootstrap'
import StarRatingComponent from 'react-star-rating-component';
import './App.css';
import Modal from './Add';
import './App'
import { Link } from 'react-router-dom';

const Header=({handleFilter,handleRate,handleAddMovie}) =>{
    return(
        <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Link to={`/home`}>     
                <Navbar.Brand href="#home">Hooks CheckPoint</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav className="me-auto width">
                        <Link to={`/home/addMovie`}> <Modal handleAddMovie={handleAddMovie} ></Modal>  </Link>
                    </Nav>
                    <Form className="d-flex margin">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="mr-2"
                            aria-label="Search"
                            onChange={(e)=>handleFilter(e.target.value)}
                        />
                        <Button variant="outline-success" className="left">Search</Button>
                    </Form>
                </Nav>

                <Nav>
                <StarRatingComponent emptyStarColor={'white'} onStarClick={(nextValue, prevValue, name)=>handleRate(nextValue)}/>
                </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
export default Header
