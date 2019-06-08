import { connect } from 'react-redux';
import { fetchUserBoards } from '../../actions/board_actions';
import { openModal } from '../../actions/modal_actions';
import BoardsShow from './boards_index';

const msp = (state, ownProps) => {
  return {
    board: state.entities.boards[ownProps.match.params.boardId],
  };
};

const mdp = dispatch => {
  return {
    fetchUserItems: userId => dispatch(fetchUserItems(userId)),
    openModal: type => dispatch(openModal(type))
  };
};

export default connect(msp, mdp)(BoardsShow);
