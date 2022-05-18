import * as React from 'react'
import axios from 'axios'

const DefaultState = {
  itemListings: []
}

const ItemListingsContext = React.createContext(DefaultState)

export const ItemListingsConsumer = ItemListingsContext.Consumer

export class ItemListingsProvider extends React.Component {
    state = DefaultState

    componentDidMount() {
      axios.get('https://mystylebook-dani.s3.eu-west-1.amazonaws.com/listings.json')
      .then(res => res.data)
      .then(res => {
        this.setState({
            itemListings: res
        })
    });
    }

    render() {
      const { children } = this.props
      const { itemListings } = this.state

      return (
        <ItemListingsContext.Provider
          value={{
            itemListings
          }}
        >
          {children}
        </ItemListingsContext.Provider>
      )
    }
  }
