import { merge } from 'lodash';
import {
  RECEIVE_USER_BOARDS,
  RECEIVE_BOARD,
  REMOVE_BOARD
} from '../actions/board_actions';

const BoardsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_USER_BOARDS:
      const nextState = {};
      action.boards.forEach(board => (nextState[board._id] = board));
      return nextState;
    case RECEIVE_BOARD:
      return merge({}, state, { [action.board._id]: action.board });
    case REMOVE_BOARD:
      delete newState[action.boardId];
      return newState;
    default:
      return state;
  }
};

export default BoardsReducer;
