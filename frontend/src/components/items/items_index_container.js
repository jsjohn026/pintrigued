import { connect } from 'react-redux';
import { fetchUserItems } from '../../actions/item_actions';
import { openModal } from '../../actions/modal_actions';
import ItemsIndex from './items_index';

const msp = (state, ownProps) => {
  return {
    items: Object.values(state.entities.items),
    userId: state.entities.users[ownProps.match.params.userId]
  };
};

const mdp = dispatch => {
  return {
    fetchUserItems: userId => dispatch(fetchUserItems(userId)),
    // openModal: type => dispatch(openModal(type))
  };
};

export default connect(
  msp,
  mdp
)(ItemsIndex);