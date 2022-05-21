import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import axios from 'axios';

function Listing({ listing }) {
  const { shop, price, category, title, id, image } = listing
  const [isRemoving, setIsRemoving] = useState(false)
  if (!listing) {
    return null
  }

  function refreshPage() {
    window.location.reload(false);
  }

  const handleRemove = () => {
    if (isRemoving) return
    setIsRemoving(true)
    axios.post('http://127.0.0.1:9000/stylebookapp/delete', image)
    .then(() => {
        setIsRemoving(false)
    })
    .then(() => {
        refreshPage()
    })
  }

  return (
    <Card>
      <span className="delete-btn" onClick={() => handleRemove()}>&times;</span>
      <Card.Img className='grid-image' variant="top" src={image} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {category}
        </Card.Text>
        <Card.Text>
          {shop}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">&pound; {price}</small>
      </Card.Footer>
    </Card>
  )
}

export default Listing