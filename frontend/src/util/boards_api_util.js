import axios from 'axios';

export const getBoards = () => {
  return axios.get('/api/boards')
};

export const getUserBoards = userId => {
  return axios.get(`/api/boards/user/${ userId }`)
};

export const getBoard = boardId => {
  return axios.get(`/api/boards/${ boardId }`)
}