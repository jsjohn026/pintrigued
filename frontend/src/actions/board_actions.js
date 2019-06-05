import * as APIUtil from '../util/boards_api_util';
import { 
  getBoards, 
  getUserBoards, 
  getBoard
} from '../util/boards_api_util';

export const RECEIVE_BOARD_ERRORS = 'RECEIVE_BOARD_ERRORS';
export const RECEIVE_USER_BOARDS = 'RECEIVE_USER_BOARDS';
export const RECEIVE_BOARD = 'RECEIVE_BOARD';
export const REMOVE_BOARD = 'REMOVE_BOARD';

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

const removeBoard = board => ({
  type: REMOVE_BOARD,
  boardId: board.id
});

export const createBoard = board => dispatch => {
  return APIUtil.createBoard(board).then(
    board => dispatch(receiveBoard(board.data)),
    errs => dispatch(receiveBoardErrors(errs.response.data))
    );
  };
  
  export const fetchUserBoards = userId => dispatch =>
  getUserBoards(userId)
  .then(res => dispatch(receiveUserBoards(res.data)))
  .catch(err => console.log(err));
  
  export const fetchBoard = boardId => dispatch =>
  getBoard(boardId)
  .then(res => dispatch(receiveBoard(res.data)))
  .catch(err => console.log(err.response.data));
  
  export const updateBoard = board => dispatch => {
    return APIUtil.updateBoard(board)
    .then(res => dispatch(receiveBoard(res.data)))
    .catch(errs => dispatch(receiveBoardErrors(errs.response.data))
    )
  }
  
  export const deleteBoard = boardId => dispatch =>
  deleteBoard(boardId)
    .then(res => dispatch(removeBoard(res.data)))
    .catch(err => console.log(err.response.data));