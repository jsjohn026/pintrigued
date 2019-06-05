import React, { Component } from 'react'
import BoardsIndexItem from './boards_index_item'
import './boards.css'

export class BoardsIndex extends Component {

  componentDidMount() {
    // debugger
    this.props.fetchUserBoards(this.props.match.params.userId)
  }
  
  render() {
    const { boards } = this.props
    if (!this.props.boards) return null

    const boardItems = boards.map(board => {
      return <div key={ board._id }>
        <div className="boards-index-item-container">
          <BoardsIndexItem board={ board }/>
        </div>
      </div>
    })

    return (
      <div className="boards-index-container">
        { boardItems }
      </div>
    )
  }
}

export default BoardsIndex
