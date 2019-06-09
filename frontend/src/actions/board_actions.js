import * as APIUtil from '../util/boards_api_util';

export const RECEIVE_BOARD_ERRORS = 'RECEIVE_BOARD_ERRORS';
export const RECEIVE_USER_BOARDS = 'RECEIVE_USER_BOARDS';
export const RECEIVE_BOARD = 'RECEIVE_BOARD';
export const REMOVE_BOARD = 'REMOVE_BOARD';

const receiveBoardErrors = errors => ({
  type: RECEIVE_BOARD_ERRORS,
  errors
});

const receiveUserBoards = boards => ({
  type: RECEIVE_USER_BOARDS,
  boards
});

const receiveBoard = board => ({
  type: RECEIVE_BOARD,
  board
});

const removeBoard = data => ({
  type: REMOVE_BOARD,
  boardId: data.boardId
});

export const createBoard = board => dispatch => {
  return APIUtil.createBoard(board)
    .then(res => dispatch(receiveBoard(res.data)))
    .catch(errors => dispatch(receiveBoardErrors(errors.response.data)))
}
  
export const fetchUserBoards = userId => dispatch => {
  return APIUtil.getUserBoards(userId)
  .then(res => dispatch(receiveUserBoards(res.data)))
  .catch(errors => dispatch(receiveBoardErrors(errors.response.data)))
}
  
export const fetchBoard = boardId => dispatch => {
  return APIUtil.getBoard(boardId)
  .then(res => dispatch(receiveBoard(res.data)))
  .catch(errors => dispatch(receiveBoardErrors(errors.response.data)))
}
  
export const updateBoard = board => dispatch => {
  return APIUtil.updateBoard(board)
  .then(res => dispatch(receiveBoard(res.data)))
  .catch(errors => dispatch(receiveBoardErrors(errors.response.data)))
}
  
export const deleteBoard = boardId => dispatch => {
  return APIUtil.deleteBoard(boardId)
  .then(res => dispatch(removeBoard(res.data)))
  .catch(errors => dispatch(receiveBoardErrors(errors.response.data)))
}