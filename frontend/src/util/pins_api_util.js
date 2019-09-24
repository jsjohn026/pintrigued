import axios from 'axios';

export const fetchPins = () => {
  return axios.get('/api/pins');
};

// export const fetchUserPins = userId => {
//   return axios.get(`/api/pins/users/${ userId }`);
// };

// export const fetchBoardPins = boardId => {
//   return axios.get(`/api/pins/boards/${ boardId }`);
// };

export const fetchPin = pinId => {
  return axios.get(`/api/pins/${pinId}`);
};

export const createPin = pin => {
  return axios.post('/api/upload', pin);
};
