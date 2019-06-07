import axios from 'axios';

export const getPins = () => {
  return axios.get('/api/pins');
};

// export const getUserPins = userId => {
//   return axios.get(`/api/pins/users/${ userId }`);
// };

// export const getBoardPins = boardId => {
//   return axios.get(`/api/pins/boards/${ boardId }`);
// };

export const getPin = pinId => {
  return axios.get(`/api/pins/${pinId}`);
};

export const createPin = pin => {
  return axios.post('/api/upload', pin);
};
