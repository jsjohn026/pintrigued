import axios from 'axios';

export const createBoard = board => {
  return axios.post('/api/boards', board);
};

export const getBoards = () => {
  return axios.get('/api/boards');
};

export const getUserBoards = userId => {
  return axios.get(`/api/boards/users/${ userId }`);
};

export const getBoard = boardId => {
  return axios.get(`/api/boards/${ boardId }`);
};

export const updateBoard = board => {
  return axios.patch(`/api/boards/${ board._id }`, board);
};

export const deleteBoard = boardId => {
  return axios.delete(`/api/boards/${ boardId }`);
};
