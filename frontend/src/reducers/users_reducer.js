import { merge } from 'lodash';
import { RECEIVE_USER } from '../actions/user_actions'

const initialState = {}

const UsersReducer = (state = initialState, action) => {
  Object.freeze(state)
  // let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_USER:
      return merge({}, state, { [action.user.data._id]: action.user.data });
    default:
      return state
  }
};

export default UsersReducer