import React from 'react';
import { connect } from 'react-redux';
import { fetchUserBoards } from '../../actions/board_actions';
import { createItem } from '../../actions/item_actions';
import { openModal } from '../../actions/modal_actions';
import './create_item.css';

class CreateItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBoardName: 'Select',
      selectedBoardId: null,
      optionsOpen: false,
      itemSaved: false
    };
    this.toggleOptions = this.toggleOptions.bind(this);
    this.selectBoard = this.selectBoard.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { pinId, createItem } = this.props;
    if (this.state.selectedBoardName === 'Select') return null
    createItem({ pinId: pinId, boardId: this.state.selectedBoardId }).then(() =>
      this.setState({ optionsOpen: false, itemSaved: true })
    );
  }

  toggleOptions(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({ optionsOpen: !this.state.optionsOpen });
  }

  selectBoard(board) {
    this.setState({
      selectedBoardName: board.title,
      selectedBoardId: board.id,
      optionsOpen: false
    });
  }

  render() {
    const { optionsOpen, selectedBoardName, itemSaved } = this.state;
    const { userBoards, openModal, currentUser } = this.props;
    if (!currentUser) return null;
    const boardOptions = userBoards.map((board, i) => {
      return (
        <ul key={i} onClick={() => this.selectBoard(board)}>
          {board.title}
        </ul>
      );
    });

    if (itemSaved) {
      return (
        <div className='item-saved-display-container'>
          <div className='item-saved-display'>{selectedBoardName}</div>
        </div>
      );
    }
    return (
      <div className='create-pin-container'>
        <form onSubmit={this.handleSubmit}>
          <div className='create-pin-save'>
            <div className='select-board-button'>
              <button onClick={this.toggleOptions}>
                <div className='selected-board-name'>{selectedBoardName}</div>
                <i className='fas fa-chevron-down' />
              </button>
            </div>
            <input type='submit' value='Save' />
          </div>
          {optionsOpen && (
            <div className='create-pin-board-options-container'>
              <div className='create-pin-board-options'>
                <div className='board-options-list'>{boardOptions}</div>
                <div
                  className='board-options-create-board'
                  onClick={() => openModal('createBoard')}
                >
                  <i className='fas fa-plus-circle' />
                  Create board
                </div>
              </div>
            </div>
          )}
        </form>
      </div>
    );
  }
}

const mstp = state => {
  if (state.session.user) {
    return {
      currentUser: state.session.user.id,
      userBoards: Object.values(state.entities.boards)
    };
  }
};

const mdtp = dispatch => ({
  openModal: content => dispatch(openModal(content)),
  createItem: item => dispatch(createItem(item))
});

export default connect(
  mstp,
  mdtp
)(CreateItemForm);
