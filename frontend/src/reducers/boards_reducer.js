import { merge } from 'lodash';
import {
  RECEIVE_BOARDS,
  RECEIVE_USER_BOARDS,
  RECEIVE_BOARD
} from '../actions/board_actions';

const BoardsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  
  switch (action.type) {
    case RECEIVE_USER_BOARDS:
      action.boards.data.forEach(board => {
        newState[board._id] = board
      })
      return newState
    case RECEIVE_BOARD:
      return merge({}, state, { [action.board.data._id]: action.board.data });
    default:
      return state;
  }
};

export default BoardsReducer;
