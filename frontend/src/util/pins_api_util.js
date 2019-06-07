import axios from 'axios';

export const getPins = () => {
  return axios.get('/api/pins');
};

export const getUserPins = userId => {
  return axios.get(`/api/pins/users/${ userId }`);
};

export const getBoardPins = boardId => {
  return axios.get(`/api/pins/boards/${ boardId }`);
};

export const getPin = pinId => {
  return axios.get(`/api/pins/${ pinId }`);
};

export const createPin = (boardId, pin) => {
  return axios.post(`/api/pins/boards/${ boardId }`, pin);
};

// export const updatePin = pin => {
//   return axios.patch(`/api/pins/${ pin._id }`, pin);
// };

// export const deletePin = pinId => {
//   return axios.delete(`/api/pins/${ pinId }`);
// };
