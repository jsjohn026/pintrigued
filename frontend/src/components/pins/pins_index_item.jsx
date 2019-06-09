import React from 'react'
import { Link } from 'react-router-dom'
import './pins.css'

class PinsIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    const { _id, imageUrl, linkUrl } = this.props.pin
    const pinLink = linkUrl === "" ? imageUrl : linkUrl
    
    return (
      <div className="pins-index-item-holder">
        <div className="pins-index-item-container">
          <div className="pins-index-item">
            <a href={ pinLink }>
              <img src={ `${ imageUrl }` } />
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default PinsIndexItem