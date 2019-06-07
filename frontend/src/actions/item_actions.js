import * as APIUtil from "../util/boards_api_util";
import { REMOVE_BOARD } from "./board_actions";

export const RECEIVE_ITEM_ERRORS = "RECEIVE_ITEM_ERRORS";
export const RECEIVE_BOARD_ITEMS = "RECEIVE_BOARD_ITEMS ";
export const RECEIVE_USER_ITEMS = "RECEIVE_USER_ITEMS";
export const RECEIVE_ITEM = "RECEIVE_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";

const receiveItemErrors = errs => ({
  type: RECEIVE_ITEM_ERRORS, 
  errs
});

const receiveBoardItems = items => ({
  type: RECEIVE_BOARD_ITEMS, 
  items
});

const receiveUserItems = items => ({
  type: RECEIVE_USER_ITEMS, 
  items
});

const receiveItem = item => ({
  type: RECEIVE_ITEM, 
  item
});

const removeItem = data => ({
  type: REMOVE_ITEM, 
  itemId: data.itemId
});

export const updateItem = item => dispatch => {
  return APIUtil.updateItem(item)
  .then(res => dispatch(receiveItem(res.data)))
  .catch(errs => dispatch(receiveItemErrors(errs.response.data))
  )
}

export const deleteItem = itemId => dispatch =>
  APIUtil.deleteItem(itemId)
  .then(res => dispatch(removeItem(res.data)))
  .catch(err => console.log(err.response.data));