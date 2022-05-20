import React, { useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

function UploadButton() {
    const [isUploading, setIsUploading] = useState(false)
    const inputRef = useRef(null);

    const handleUpload = () => {
        if (isUploading) return
        setIsUploading(true)
        var formData = new FormData()
        formData.append("image", inputRef.current.files[0]);
        axios.post('http://127.0.0.1:9000/stylebookapp/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(() => {
            setIsUploading(false)
        })
        .then(() => {
            console.log("File uploaded successfully.")
        })
      }

    return (
        <div className="m-3">
            <input
                ref={inputRef}
                className="d-none"
                type="file"
                onInput={() => {
                    handleUpload();
                }}
            />
            <Button
            variant="primary"
            onClick={() => inputRef.current.click()}
            > Upload
            </Button>
        </div>
    );
}
  
export default UploadButton;