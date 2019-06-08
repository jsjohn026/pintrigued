import * as APIUtil from '../util/pins_api_util';

export const RECEIVE_PIN_ERRORS = 'RECEIVE_PIN_ERRORS';
export const RECEIVE_PINS = 'RECEIVE_PINS';
export const RECEIVE_PIN = 'RECEIVE_PIN';

const receivePinErrors = errors => ({
  type: RECEIVE_PIN_ERRORS,
  errors
});

const receivePins = pins => ({
  type: RECEIVE_PINS,
  pins
})

const receivePin = pin => ({
  type: RECEIVE_PIN,
  pin
})

export const fetchPins = pins => dispatch => {
  return APIUtil.fetchPins(pins)
    .then(pins => dispatch(receivePins(pins)))
    .catch(errors => dispatch(receivePinErrors(errors.response.data)))
}

export const fetchPin = pin => dispatch => {
  return APIUtil.fetchPin(pin)
    .then(pin => dispatch(receivePins(pin)))
    .catch(errors => dispatch(receivePinErrors(errors.response.data)))
}

export const createPin = pin => dispatch => {
  return APIUtil.createPin(pin)
    .then(pin => dispatch(receivePin(pin.data)))
    .catch(errors => dispatch(receivePinErrors(errors.response.data)))
};
