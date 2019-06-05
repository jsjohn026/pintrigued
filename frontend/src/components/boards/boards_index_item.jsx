import React from 'react'

class BoardIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    const { board } = this.props
    const { title } = board
    return (
      <div className="boards-index-item-container">
        <div className="boards-index-item-bg">
          <div className="pins-container"> {/* move className to pins coponent when ready */}
            {/* future Pins */}
          </div>

          <div className="boards-index-item-tail-container">
            <div className="boards-index-item-tail">
              
              <div className="boards-index-item-title-container">
                <div className="boards-index-item-title">
                  { title }
                </div>
              </div>

              <div className="board-index-item-pins">
                {/* future Pins count */} 0 Pins
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BoardIndexItem