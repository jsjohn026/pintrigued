import { connect } from 'react-redux';
import { fetchUserBoards } from '../../actions/board_actions';
import { fetchUserItems } from '../../actions/item_actions';
import { openModal } from '../../actions/modal_actions';
import BoardsIndex from './boards_index';

const msp = (state, ownProps) => {
  return {
    boards: Object.values(state.entities.boards),
    items: Object.values(state.entities.items)
  };
};

const mdp = dispatch => {
  return {
    fetchUserBoards: userId => dispatch(fetchUserBoards(userId)),
    fetchUserItems: userId => dispatch(fetchUserItems(userId)),
    openModal: type => dispatch(openModal(type))
  };
};

export default connect(
  msp,
  mdp
)(BoardsIndex);
