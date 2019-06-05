import React from 'react'

class BoardIndexItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    const { board } = this.props
    const { title } = board
    return (
      <div>
        { title }
        {/* future Pins */}
      </div>
    )
  }
}

export default BoardIndexItem