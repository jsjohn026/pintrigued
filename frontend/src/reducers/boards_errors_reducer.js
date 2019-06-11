import {
  RECEIVE_BOARD_ERRORS,
  RECEIVE_BOARD,
} from '../actions/board_actions';

const _nullErrors = [];

const BoardsErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_BOARD_ERRORS:
      return action.errors;
    case RECEIVE_BOARD:
      return _nullErrors;
    default:
      return state;
  }
};

export default BoardsErrorsReducer;