import React, { useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

function UploadButton() {
    const [isUploading, setIsUploading] = useState(false)
    const inputRef = useRef(null);

    function refreshPage() {
        window.location.reload(false);
    }

    const handleUpload = () => {
        if (isUploading) return
        setIsUploading(true)
        var formData = new FormData()
        formData.append("image", inputRef.current.files[0]);
        axios.post('http://stylebook-backend-dev.eu-west-1.elasticbeanstalk.com/stylebookapp/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(() => {
            setIsUploading(false)
        })
        .then(() => {
            refreshPage()
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