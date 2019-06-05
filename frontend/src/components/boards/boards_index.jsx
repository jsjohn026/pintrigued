import React, { Component } from 'react'
import BoardsIndexItem from './boards_index_item'

export class FeedIndex extends Component {

  componentDidMount() {
    // debugger
    this.props.fetchUserBoards(this.props.match.params.userId)
  }
  
  render() {
    // debugger
    return (
      <div>
        Hello World
      </div>
    )
  }
}

export default FeedIndex
