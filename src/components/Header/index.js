import * as React from 'react'

function Header ( props ) {
    return (
      <div className="header">
          <h1>Style Book</h1>
          <p>{props.username}'s Personal Style Lookbook</p>
      </div>
    )
  }

export default Header
