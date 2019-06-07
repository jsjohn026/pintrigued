import * as APIUTIL from '../util/pins_api_util';

export const RECEIVE_PIN = 'RECEIVE_PIN';
export const RECEIVE_PIN_ERRORS = 'RECEIVE_PIN_ERRORS';

const receivePin = pin => ({
  type: RECEIVE_PIN,
  pin
});

const receivePinErrors = errs => ({
  type: RECEIVE_PIN_ERRORS,
  errs
});

export const createPin = pin => dispatch => {
  debugger;
  return APIUTIL.createPin(pin).then(
    pin => {
      debugger;
      dispatch(receivePin(pin.data));
    },
    errs => dispatch(receivePinErrors(errs.response.data))
  );
};
