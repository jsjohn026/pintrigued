import { RECEIVE_PIN } from '../actions/pin_actions';
import { merge } from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PIN:
      return merge({}, state, { [action.pin._id]: action.pin });
    default:
      return state;
  }
};
