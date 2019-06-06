import React from 'react'
import EditBoardForm from "./edit_board_form";

class BoardIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showEdit: false };
  }

  render () {
    const { board } = this.props
    const { title } = board
    return (
<<<<<<< HEAD
      <div className="boards-index-item-container">
        {this.state.showEdit ?  <EditBoardForm board={board} closeModal={() => this.setState({ showEdit: false})} /> : null }
        <div className="boards-index-item-bg">
          <div className="pins-container"> {/* move className to pins coponent when ready */}
            {/* future Pins */}
          </div>

          <div className="boards-index-item-tail-container">
            <div className="boards-index-item-tail">
              
              <div className="boards-index-item-title-container">
                <div onClick={() => this.setState({ showEdit: true})}>Edit</div>
                <div className="boards-index-item-title">
                  { title }
=======
      <div className="boards-index-item-holder">
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
>>>>>>> 31b617de26d5800b0e47f24d1183a8f2741c03e4
                </div>

                <div className="board-index-item-pins">
                  {/* future Pins count */} 0 Pins
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BoardIndexItem