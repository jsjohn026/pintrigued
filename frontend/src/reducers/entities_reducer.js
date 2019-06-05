import { combineReducers } from 'redux';
import boards from './boards_reducer'

const EntitiesReducer = combineReducers({
  boards,
})

export default EntitiesReducer