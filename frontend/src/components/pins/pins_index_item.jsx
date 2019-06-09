import React from 'react'
import './pins.css'

class PinsIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {


    return (
      <div className="pins-index-item-holder">
        <div className="pins-index-item-container">
          <div className="pins-index-item">
            Pin Item { this.props.pin._id }
            <img src={ `${ this.props.pin.imageUrl }` } />
          </div>
        </div>
      </div>
    )
  }
}

export default PinsIndexItem