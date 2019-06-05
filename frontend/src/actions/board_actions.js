import * as APIUtil from '../util/boards_api_util';

export const RECEIVE_BOARD = 'RECEIVE_BOARD';
export const RECEIVE_BOARD_ERRORS = 'RECEIVE_BOARD_ERRORS';
import { getBoards, getUserBoards, getBoard } from '../util/boards_api_util';

export const RECEIVE_BOARDS = "RECEIVE_BOARDS";
export const RECEIVE_USER_BOARDS = "RECEIVE_USER_BOARDS";
export const RECEIVE_BOARD = "RECEIVE_BOARD";

const receiveBoards = boards => ({
  type: RECEIVE_BOARDS,
  boards
});

const receiveUserBoards = boards => ({
  type: RECEIVE_USER_BOARDS,
  boards
});

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

export const fetchBoards = () => dispatch => (
  getBoards()
    .then(boards => dispatch(receiveBoards(boards)))
    .catch(err => console.log(err))
);

export const fetchUserBoards = userId => dispatch => (
  getUserBoards(userId)
    .then(boards => dispatch(receiveUserBoards(boards)))
    .catch(err => console.log(err))
);

export const fetchBoard = boardId => dispatch => (
  getBoard(boardId)
    .then(board => dispatch(receiveBoard(board)))
    .catch(err => console.log(err))
);
