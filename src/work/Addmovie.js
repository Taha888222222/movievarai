import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';

const Addmovie = ({add}) => {
     // show mondal and close
     const [show, setshow] = useState(false);

     const handleclose = () =>setshow (false);
     const handleshow = () => setshow(true);
     //intialstate des state bch nadar state fera
     const [title, settitle] = useState("")
     const [description, setdescription] = useState("")
     const [rate, setrate] = useState("")
     const [posterurl, setposterurl] = useState("")
 
     // update fonction eli bch t3abi state 
     const handletitle=(e)=>{
       settitle(e.target.value)
     }
     const handledescription=(e)=>{
       setdescription(e.target.value)
     }
     const handlerate=(e)=>{
       setrate(e.target.value)
     }
     const handleposterurl=(e)=>{
       setposterurl(e.target.value)
     }
     //fonction newmovie
     const handlemovie=(e)=>{
     let newmovie = {title,description,rate,posterurl}
     add(newmovie)
     setshow(false)
   }
  return (
    <div className='pm'>
    <Button   variant="primary" onClick={handleshow} >
            Add Movie
        </Button>

        <Modal show={show} onHide={handleclose}>
            <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Label>Movie Title</Form.Label>
                <Form.Control type="text" placeholder="Enter title" value={title} onChange={(e)=>handletitle(e)}/>
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" placeholder="Enter description" value={description} onChange={(e)=>handledescription(e)} />
                <Form.Label>Rate</Form.Label>
                <Form.Control type="number" placeholder="Enter rate" value={rate} onChange={(e)=>handlerate(e)}/>
                <Form.Label>PosterUrl</Form.Label>
                <Form.Control type="url" placeholder="Enter potser url" value={posterurl} onChange={(e)=>handleposterurl(e)} />
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary"  onClick={handleclose}>
                Close
            </Button>
            <Button variant="primary"  onClick={handlemovie}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
    </div>
  )
}

export default Addmovie