import {Modal,Form,Button} from 'react-bootstrap'
import StarRatingComponent from 'react-star-rating-component';
import { useState } from 'react';

function Example({handleAddMovie}) {
    const [show, setShow] = useState(false);
    const [disableSave, setDisableSave] = useState(true)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [newMovie, setNewMovie] = useState({
            title:'',
            description:'',
            posterUrl:'',
            rate:0,
    });

    const handleChange = (e) =>{
        setNewMovie({...newMovie, [e.target.name]:e.target.value}) 
        if(newMovie.title !=='' && newMovie.description !=='' && newMovie.posterUrl !=='')
        setDisableSave(false)
        else
        setDisableSave(true)
    }

    const handleSave = () =>{
        handleAddMovie(newMovie);
        handleClose();
    }

    return (
    <>
        <Button variant="primary" onClick={handleShow}>
            Add new Movie
        </Button>

        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Adding Movie</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                    <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Movie Title</Form.Label>
                                <Form.Control name="title" type="text" placeholder="Enter title" onChange={handleChange} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Description</Form.Label>
                                <Form.Control name="description" type="text" placeholder="Enter description" onChange={handleChange}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Label>PosterUrl</Form.Label>
                                <Form.Control name="posterUrl" type="text" placeholder="Enter PosterUrl" onChange={handleChange}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Label>Movie Rate </Form.Label><br></br>
                                <StarRatingComponent  name={"star"} onStarClick={(nextValue, prevValue, name)=>setNewMovie({...newMovie, rate:nextValue})}/>
                            </Form.Group>
                    </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary"  className="btn btn-danger" onClick={handleClose}>Close</Button>
                <Button variant="primary" className="btn btn-success" onClick={handleSave} disabled={disableSave}>Add Film</Button>
            </Modal.Footer>
        </Modal>
    </>
    );
}

export default Example