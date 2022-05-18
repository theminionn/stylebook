import * as React from 'react'
import { Card } from 'react-bootstrap'

function Listing({ listing }) {
  if (!listing) {
    return null
  }

  const { image, title, price, description } = listing

  return (
    <Card>
      <Card.Img className='grid-image' variant="top" src={image} alt={title} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">&pound; {price}</small>
      </Card.Footer>
    </Card>
  )
}

export default Listing