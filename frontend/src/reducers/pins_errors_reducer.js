import { RECEIVE_PIN_ERRORS, RECEIVE_PIN } from '../actions/pin_actions';

const _nullErrors = [];

const PinsErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PIN_ERRORS:
      return Object.values(action.errors);
    case RECEIVE_PIN:
      return _nullErrors;
    default:
      return state;
  }
};

export default PinsErrorsReducer;
