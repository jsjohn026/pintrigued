import * as APIUtil from '../util/pins_api_util';

export const RECEIVE_PIN_ERRORS = 'RECEIVE_PIN_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const RECEIVE_PINS = 'RECEIVE_PINS';
export const RECEIVE_PIN = 'RECEIVE_PIN';

const receivePinErrors = errors => ({
  type: RECEIVE_PIN_ERRORS,
  errors
});

const receivePins = pins => ({
  type: RECEIVE_PINS,
  pins
});

const receivePin = pin => ({
  type: RECEIVE_PIN,
  pin
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const fetchPins = () => dispatch => {
  return APIUtil.fetchPins()
    .then(res => dispatch(receivePins(res.data)))
    .catch(errors => dispatch(receivePinErrors(errors.response.data)));
};

export const fetchPin = pinId => dispatch => {
  return APIUtil.fetchPin(pinId)
    .then(res => dispatch(receivePin(res.data)))
    .catch(errors => dispatch(receivePinErrors(errors.response.data)));
};

export const createPin = pin => dispatch => {
  return APIUtil.createPin(pin)
    .then(res => {
      dispatch(receivePin(res.data));
      return res.data;
    })
    .catch(errors => dispatch(receivePinErrors(errors.response.data)));
};
