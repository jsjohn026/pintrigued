import React from "react";
import { connect } from "react-redux";
import { updateBoard, deleteBoard } from "../../actions/board_actions";
import '../modal/modal.css';

class UpdateBoardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.board;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateBoard(this.state);
  }

  update(field) {
    return e => this.setState({
      [field]: e.target.value
    });
  }

  render() {
    return(
      <div>
        <div className="modal-container" onClick={this.props.closeModal}>
        </div>
        <div className="modal-content">
          {/* This is modal content */}
          <div
          className="edit-board-form-container">
            <h1>Edit your board</h1>      
            <form 
            onSubmit={this.handleSubmit}
            className="edit-board-form">
              <div className="edit-board-name">
                <label>Name</label>
                <input 
                type="text" 
                value={this.state.title}
                onChange={this.update(this.state.title)}
                />
              </div>
              <div className="edit-board-description">
                <label>Description</label>
                <textarea value={this.state.description} cols="30" rows="4" onChange={this.update(this.state.description)}></textarea>
              </div>
              <div className="update-board-buttons">
                <button onClick={this.props.deleteBoard}>Delete</button>
                <button onClick={this.props.closeModal}>Cancel</button>
                <input type="submit" value="Save"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let board = ownProps.board;

  return ({
    board: board
  })
}

const mapDispatchToProps = dispatch => {
  return ({
    updateBoard: board => dispatch(updateBoard(board)),
    deleteBoard: boardId => dispatch(deleteBoard(boardId))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateBoardForm);