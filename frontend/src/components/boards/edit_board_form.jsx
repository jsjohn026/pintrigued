import React from 'react';
import { connect } from 'react-redux';
import { updateBoard, deleteBoard } from '../../actions/board_actions';
import '../modal/modal.css';
import "./edit_board.css";

class UpdateBoardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.board;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateBoard(this.state)
    .then(() => this.props.closeModal());
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.target.value
      });
  }

  render() {
    const { closeModal, board, deleteBoard } = this.props;

    return(
      <div>
        <div className="modal-container" onClick={closeModal}>
        </div>
        <div className="modal-content">
          <div
          className="edit-board-form-container">
            <button onClick={closeModal} className={`modal-close`}>
              <i className='fas fa-times' />
            </button>
            <form>
              <div className="edit-board-name">
                <label>Name</label>
                <input 
                type="text" 
                value={this.state.title}
                onChange={this.update("title")}
                />
              </div>
              <div className='edit-board-description'>
                <label>Description</label>
                <textarea 
                value={this.state.description} 
                cols="50" 
                rows="4" 
                onChange={this.update("description")}></textarea>
              </div>
              <div className="edit-board-buttons">
                <button onClick={
                  (e) => {
                    e.preventDefault();
                    deleteBoard(board._id);
                    closeModal();
                  }}>Delete</button>
                <button onClick={
                  (e) => {
                    e.preventDefault();
                    closeModal();
                  }}>Cancel</button>
                <input 
                type="submit" 
                value="Save"
                onClick={this.handleSubmit}
                />
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
  });
};

const mapDispatchToProps = dispatch => {
  return {
    updateBoard: board => dispatch(updateBoard(board)),
    deleteBoard: boardId => dispatch(deleteBoard(boardId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateBoardForm);
