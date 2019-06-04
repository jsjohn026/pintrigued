import { RECEIVE_BOARD } from '../actions/board_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOARD:
      return merge({}, state, { [action.board.id]: action.board });
    default:
      return state;
  }
};
