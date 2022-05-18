import * as React from 'react'

import { CardGroup, Row, Col } from "react-bootstrap"
import Header from '../../components/Header'
import Listing from '../../components/Listing'
import UploadButton from '../../UI/UploadButton'
import {
    ItemListingsProvider,
    ItemListingsConsumer
  } from '../../context/ItemListingsProvider'

  function Home() {
    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <UploadButton/>
          <ItemListingsProvider>
            <ItemListingsConsumer>
                {function(value) {
                    const { itemListings } = value
                    return (
                        <CardGroup className="grid-list">
                          <Row xs={1} md={3} className="g-4">
                            {itemListings.map(listing => (
                              <Col>
                                <Listing listing={listing} key={listing.image} />
                              </Col>
                            ))}
                          </Row>
                        </CardGroup>
                    )
                }}
            </ItemListingsConsumer>
          </ItemListingsProvider>
        </div>
      </React.Fragment>
    )
  }

export default Home
