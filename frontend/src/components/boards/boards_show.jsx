import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import StackGrid from 'react-stack-grid';
import ItemsIndexItem from '../items/items_index_item';
import './boards_show.css';

class BoardsShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { addOptionsOpen: false };
    this.closeDropdown = this.closeDropdown.bind(this);
  }

  componentDidMount() {
    const { fetchBoard, fetchBoardItems } = this.props;
    const { params } = this.props.match;
    fetchBoard(params.boardId);
    fetchBoardItems(params.boardId);
  }

  closeDropdown() {
    if (this.state.addOptionsOpen) {
      this.setState({ addOptionsOpen: false });
    }
  }

  render() {
    const { items, board } = this.props;
    const { addOptionsOpen } = this.state;
    if (!this.props.board) return null;

    const pinItems = items.map(item => {
      return (
        <Link to={`/pins/${item._id}`}>
          <div key={item._id}>
            <ItemsIndexItem item={item} />
          </div>
        </Link>
      );
    });

    return (
      <div className='board-show-container' onClick={this.closeDropdown}>
        <div className='board-show-header'>
          <div
            className='boards-index-buttons'
            onClick={() => this.setState({ addOptionsOpen: !addOptionsOpen })}
          >
            <i className='fas fa-plus' />
          </div>
          {addOptionsOpen && (
            <div className='add-options-dropdown-container'>
              <div className='add-options-dropdown'>
                <Link to={`/users/${this.props.match.params.userId}/upload`}>
                  Create Pin
                </Link>
              </div>
            </div>
          )}
          <div className='board-show-title'>
            <div>
              <h1>{board.title}</h1>
            </div>
            <div className='item-count'>{items.length} pins</div>
          </div>
        </div>
        {/* <div className='pins-index-container'> */}
        {/* <div className='pins-index'> */}
        <StackGrid columnWidth={260} monitorImagesLoaded={true}>
          {pinItems}
        </StackGrid>
        {/* </div> */}
        {/* </div> */}
      </div>
    );
  }
}

export default withRouter(BoardsShow);
