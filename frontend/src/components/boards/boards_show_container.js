import { connect } from 'react-redux';
import { fetchBoardItems } from '../../actions/item_actions';
import { fetchBoard } from '../../actions/board_actions';
import { openModal } from '../../actions/modal_actions';
import BoardsShow from './boards_show';

const msp = (state, ownProps) => {
  return {
    board: state.entities.boards[ownProps.match.params.boardId],
    items: Object.values(state.entities.items)
  };
};

const mdp = dispatch => {
  return {
    fetchBoard: boardId => dispatch(fetchBoard(boardId)),
    fetchBoardItems: boardId => dispatch(fetchBoardItems(boardId)),
    openModal: type => dispatch(openModal(type))
  };
};

export default connect(
  msp,
  mdp
)(BoardsShow);
