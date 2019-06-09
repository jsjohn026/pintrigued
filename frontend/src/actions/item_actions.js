import * as APIUtil from "../util/items_api_util";

export const RECEIVE_ITEM_ERRORS = "RECEIVE_ITEM_ERRORS";
export const RECEIVE_USER_ITEMS = "RECEIVE_USER_ITEMS";
export const RECEIVE_BOARD_ITEMS = "RECEIVE_BOARD_ITEMS ";
export const RECEIVE_ITEM = "RECEIVE_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";

const receiveItemErrors = errors => ({
  type: RECEIVE_ITEM_ERRORS, 
  errors
});

const receiveUserItems = items => ({
  type: RECEIVE_USER_ITEMS, 
  items
});

const receiveBoardItems = items => ({
  type: RECEIVE_BOARD_ITEMS, 
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

export const fetchUserItems = userId => dispatch => {
  return APIUtil.fetchUserItems(userId)
    .then(res => dispatch(receiveUserItems(res.data)))
    .catch(errors => dispatch(receiveItemErrors(errors.response.data)))
}

export const fetchBoardItems = boardId => dispatch => {
  return APIUtil.fetchBoardItems(boardId)
    .then(res => dispatch(receiveBoardItems(res.data)))
    .catch(errors => dispatch(receiveItemErrors(errors.response.data)))
}

export const fetchItem = itemId => dispatch => {
  return APIUtil.fetchItem(itemId)
    .then(res => dispatch(receiveItem(res.data)))
    .catch(errors => dispatch(receiveItemErrors(errors.response.data)))
}

export const updateItem = item => dispatch => {
  return APIUtil.updateItem(item)
    .then(res => dispatch(receiveItem(res.data)))
    .catch(errors => dispatch(receiveItemErrors(errors.response.data)))
}

export const deleteItem = itemId => dispatch => {
  return APIUtil.deleteItem(itemId)
    .then(res => dispatch(removeItem(res.data)))
    .catch(errors => dispatch(receiveItemErrors(errors.response.data)))
}