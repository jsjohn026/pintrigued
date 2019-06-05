import { merge } from 'lodash';

// export default (state = {}, action) => {
//   Object.freeze(state);
//   switch (action.type) {
//     case RECEIVE_BOARD:
//       return merge({}, state, { [action.board.id]: action.board });
//     default:
//       return state;
//   }
// };
import {
  RECEIVE_BOARDS,
  RECEIVE_USER_BOARDS,
  RECEIVE_NEW_BOARD,
  RECEIVE_BOARD
} from '../actions/board_actions';

const BoardsReducer = (
  state = { all: {}, user: {}, new: undefined },
  action
) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_BOARDS:
      newState.all = action.boards.data;
      return newState;
    case RECEIVE_USER_BOARDS:
      newState.user = action.boards.data;
      return newState;
    case RECEIVE_NEW_BOARD:
      newState.new = action.board.data;
      return newState;
    case RECEIVE_BOARD:
      return merge({}, state, { [action.board.id]: action.board });
    default:
      return state;
  }
};

export default BoardsReducer;
