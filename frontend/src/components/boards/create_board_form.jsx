import React from 'react';
import { connect } from 'react-redux';
import { createBoard } from '../../actions/board_actions';

class CreateBoardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '' };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createBoard(this.state);
  }

  handleChange(e) {
    this.setState({ title: e.target.value });
  }

  render() {
    return (
      <div className='create-board-form-container'>
        <h3>Create Board</h3>
        <form
          onSubmit={this.handleSubmit.bind(this)}
          className='create-board-form'
        >
          <label>
            Name
            <input
              type='text'
              value={this.state.title}
              onChange={this.handleChange.bind(this)}
            />
            <input type='submit' />
          </label>
        </form>
      </div>
    );
  }
}

const mdtp = dispatch => ({
  createBoard: board => dispatch(createBoard(board))
});

export default connect(
  null,
  mdtp
)(CreateBoardForm);
