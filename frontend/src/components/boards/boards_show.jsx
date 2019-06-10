import React from 'react';
import { withRouter } from 'react-router-dom';
import ItemsIndexItem from '../items/items_index_item';
import './boards_show.css';

class BoardsShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { fetchBoard, fetchBoardItems } = this.props;
    const { params } = this.props.match;
    fetchBoard(params.boardId);
    fetchBoardItems(params.boardId);
  }

  render() {
    const { items, board } = this.props;
    if (!this.props.board) return null;

    const pinItems = items.map(item => {
      return (
        <div key={item._id}>
          <ItemsIndexItem item={item} />
        </div>
      );
    });

    return (
      <div className='board-show-container'>
        <div className='board-show-header'>
          <div className='board-show-title'>
            <h1>{board.title}</h1>
            <div className='item-count'>{items.length} pins</div>
          </div>
        </div>
        <div className='pins-index-container'>
          <div className='pins-index'>{pinItems}</div>
        </div>
      </div>
    );
  }
}

export default withRouter(BoardsShow);
