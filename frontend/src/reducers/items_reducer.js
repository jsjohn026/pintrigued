import { merge } from "lodash";
import { 
  RECEIVE_USER_ITEMS,
  RECEIVE_BOARD_ITEMS,
  RECEIVE_ITEM,
  REMOVE_ITEM
 } from "../actions/item_actions";

 const ItemsReducer = (state= {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_USER_ITEMS:
      action.items.forEach(item => newState[item._id] = item)
      return newState
    case RECEIVE_BOARD_ITEMS:
      action.items.forEach(item => newState[item._id] = item)
      return newState
    case RECEIVE_ITEM:
      return merge({}, state, { [action.item._id]: action.item })
    case REMOVE_ITEM:
      delete newState[action.itemId];
      return newState;
    default:
      return state;
  }
};

 export default ItemsReducer;