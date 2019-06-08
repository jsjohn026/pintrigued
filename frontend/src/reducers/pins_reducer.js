import { merge } from 'lodash';
import {
  RECEIVE_PINS,
  RECEIVE_PIN,
} from '../actions/pin_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_PINS:
      action.pins.forEach(pin => newState[pin._id] = pin)
      return newState
    case RECEIVE_PIN:
      return merge({}, state, { [action.pin._id]: action.pin });
    default:
      return state;
  }
};
