import * as APIUtil from '../util/session_api_util';
import jwt_decode from 'jwt-decode';

export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT";

const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const logoutUser = () => ({
  type: RECEIVE_USER_LOGOUT
});

// Upon signup, dispatch the approporiate action depending on which type of response we receieve from the backend
export const signup = user => dispatch => (
  APIUtil.signup(user)
    .then(res => {
        const { token } = res.data;
        const decoded = jwt_decode(token);
        localStorage.setItem('jwtToken', token);
        APIUtil.setAuthToken(token);
        dispatch(receiveCurrentUser(decoded))
    })
    .catch(errors => dispatch(receiveSessionErrors(errors.response.data)))
)

// Upon login, set the session token and dispatch the current user. Dispatch errors on failure.
export const login = user => dispatch => (
  APIUtil.login(user)
    .then(res => {
        const { token } = res.data;
        const decoded = jwt_decode(token);
        localStorage.setItem('jwtToken', token);
        APIUtil.setAuthToken(token);
        dispatch(receiveCurrentUser(decoded))
    })
    .catch(errors => dispatch(receiveSessionErrors(errors.response.data)))
)

// Upon logout, remove session token and notify backend, then clear state of user
export const logout = () => dispatch => {
  localStorage.removeItem('jwtToken')
  APIUtil.setAuthToken(false)
  dispatch(logoutUser())
};