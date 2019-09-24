import { combineReducers } from 'redux';
import users from './users_reducer';
import boards from './boards_reducer';
import pins from './pins_reducer';
import items from "./items_reducer";

const EntitiesReducer = combineReducers({
  users,
  boards,
  pins, 
  items
});

export default EntitiesReducer;
