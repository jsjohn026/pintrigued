import React from 'react';
import { connect } from 'react-redux';
import { createBoard } from '../../actions/board_actions';
import { closeModal } from '../../actions/modal_actions';
import './create_board.css';

class CreateBoardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '' };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.closeModal();
    this.props.createBoard(this.state);
  }

  handleChange(e) {
    this.setState({ title: e.target.value });
  }

  render() {
    return (
      <div className='create-board-form-container'>
        <h1>Create Board</h1>
        <form
          onSubmit={this.handleSubmit.bind(this)}
          className='create-board-form'
        >
          <div className='create-board-name'>
            <label>Name</label>
            <input
              type='text'
              value={this.state.title}
              onChange={this.handleChange.bind(this)}
            />
          </div>
          <div className='create-board-buttons'>
            <button onClick={this.props.closeModal}>Cancel</button>
            <input type='submit' value='Create' />
          </div>
        </form>
      </div>
    );
  }
}

const mdtp = dispatch => ({
  createBoard: board => dispatch(createBoard(board)),
  closeModal: () => dispatch(closeModal())
});

export default connect(
  null,
  mdtp
)(CreateBoardForm);
