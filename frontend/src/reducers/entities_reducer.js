import { combineReducers } from 'redux';
import users from './users_reducer'
import boards from './boards_reducer'

const EntitiesReducer = combineReducers({
  users,
  boards,
})

export default EntitiesReducer