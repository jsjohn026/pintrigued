import * as APIUtil from '../util/boards_api_util';

export const RECEIVE_BOARD = 'RECEIVE_BOARD';
export const RECEIVE_BOARD_ERRORS = 'RECEIVE_BOARD_ERRORS';

const receiveBoard = board => ({
  type: RECEIVE_BOARD,
  board
});

const receiveBoardErrors = errs => ({
  type: RECEIVE_BOARD_ERRORS,
  errs
});

export const createBoard = board => dispatch => {
  return APIUtil.createBoard(board).then(
    board => dispatch(receiveBoard(board)),
    errs => dispatch(receiveBoardErrors(errs))
  );
};
