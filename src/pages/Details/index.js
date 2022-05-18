import * as React from 'react'
import Map from '../../components/map/'
import KeyFeatures from '../../components/keyFeatures/'

function Details({ itemId }) {
  const features = [
    'Smart red trousers',
    'Elegant green trousers',
    'Khaki premium trousers',
    'Beige smart trousers',
    'Black smart trousers',
    'White smart trousers'
  ]
  return (
    <div>
      Show details for item with Id of {itemId}
      <KeyFeatures features={features} />
      <Map />
    </div>
  )
}

export default Details
