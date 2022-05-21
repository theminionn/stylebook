import React, { useRef, useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import axios from 'axios';

function UploadButton() {
    const [isUploading, setIsUploading] = useState(false)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const inputRef = useRef(null);

    function refreshPage() {
        window.location.reload(false);
    }

    const handleUpload = (e) => {
        if (isUploading) return
        setIsUploading(true)
        e.preventDefault()
        var formData = new FormData(e.target)
        formData.append("image", inputRef.current.files[0])
        axios.post('http://127.0.0.1:8000/stylebookapp/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(() => {
            setIsUploading(false)
        })
        .then(() => {
            handleClose()
        })
        .then(() => {
            refreshPage()
        })
      }

    return (
        <div className="m-3">
            <Button
            variant="outline-primary"
            onClick={handleShow}
            > Upload
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Describe Item</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleUpload}>
                        <Form.Control type="text" placeholder="Title" name="title"/>
                        <br />
                        <Form.Control type="text" placeholder="Shop" name="shop"/>
                        <br />
                        <Form.Control type="text" placeholder="Category" name="category"/>
                        <br />
                        <Form.Control type="text" placeholder="Price" name="price"/>
                        <br />
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Upload Image</Form.Label>
                            <Form.Control type="file" ref={inputRef}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">Submit</Button>
                </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
}
  
export default UploadButton;