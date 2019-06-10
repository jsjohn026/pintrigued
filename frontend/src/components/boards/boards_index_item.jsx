import React from 'react';
import EditBoardForm from './edit_board_form';
import BoardsIndexPinGrid from './boards_index_pin_grid';

class BoardIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showEdit: false };
  }

  render() {
    const { board, items } = this.props;
    const { title } = board;

    return (
      <div className='boards-index-item-holder'>
        <div className='boards-index-item-container'>
          {this.state.showEdit && (
            <EditBoardForm
              board={board}
              closeModal={() => this.setState({ showEdit: false })}
            />
          )}
          <div className='boards-index-item-bg'>
            <div className='pins-container'>
              {' '}
              {/* move className to pins coponent when ready */}
              {/* future Pins */}
              <BoardsIndexPinGrid items={items} />
            </div>
            <div className='boards-index-item-tail-container'>
              <div className='boards-index-item-tail'>
                <div className='boards-index-item-title-container'>
                  <div className='boards-index-item-title'>{title}</div>
                </div>
                <div className='board-index-item-pins'>
                  {/* future Pins count */} 0 Pins
                </div>
              </div>
              <div
                className='board-index-item-edit'
                onClick={() => this.setState({ showEdit: true })}
              >
                <i className='fas fa-pen' />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BoardIndexItem;
