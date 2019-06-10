import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BoardsIndexItem from './boards_index_item';
import './boards.css';

class BoardsIndex extends Component {
  constructor(props) {
    super(props);
    this.state = { addOptionsOpen: false };
    this.closeDropdown = this.closeDropdown.bind(this);
  }

  componentDidMount() {
    const { fetchUserBoards, fetchUserItems } = this.props;
    fetchUserBoards(this.props.match.params.userId).then(() =>
      fetchUserItems(this.props.match.params.userId)
    );
  }

  closeDropdown() {
    if (this.state.addOptionsOpen) {
      this.setState({ addOptionsOpen: false });
    }
  }

  render() {
    const { boards, items, openModal } = this.props;
    const { addOptionsOpen } = this.state;
    if (!this.props.boards) return null;

    const boardItems = boards.map(board => {
      const boardItems = items.filter(item => {
        return item.boardId === board._id;
      });
      return (
        <Link to={`/boards/${board._id}`}>
          <div key={board._id}>
            <BoardsIndexItem board={board} items={boardItems} />
          </div>
        </Link>
      );
    });

    return (
      <div className='boards-index-container' onClick={this.closeDropdown}>
        <div
          className='boards-index-buttons'
          onClick={() => this.setState({ addOptionsOpen: !addOptionsOpen })}
        >
          <i className='fas fa-plus' />
        </div>
        {addOptionsOpen && (
          <div className='add-options-dropdown-container'>
            <div className='add-options-dropdown'>
              <div onClick={() => openModal('createBoard')}>Create Board</div>
              <Link to={`/users/${this.props.match.params.userId}/upload`}>
                Create Pin
              </Link>
            </div>
          </div>
        )}
        <div className='boards-index'>{boardItems}</div>
      </div>
    );
  }
}

export default BoardsIndex;
