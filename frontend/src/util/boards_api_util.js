import axios from 'axios';

export const createBoard = board => {
  return axios.post('/api/boards', board);
};
