import axios from 'axios';

// export const getItems = () => {
//   return axios.get('/api/items');
// };

export const getUserItems = userId => {
  return axios.get(`/api/items/users/${userId}`);
};

export const getBoardItems = boardId => {
  return axios.get(`/api/items/boards/${boardId}`);
};

export const getItem = itemId => {
  return axios.get(`/api/items/${itemId}`);
};

export const createItem = item => {
  return axios.post('/api/items', item);
};

export const updateItem = item => {
  return axios.patch(`/api/items/${item._id}`, item);
};

export const deleteItem = itemId => {
  return axios.delete(`/api/items/${itemId}`);
};
