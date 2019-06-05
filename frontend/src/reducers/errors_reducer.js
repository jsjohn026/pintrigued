import { combineReducers } from 'redux';

import SessionErrorsReducer from './session_errors_reducer';
import BoardErrorsReducer from './board_errors_reducer';

export default combineReducers({
  session: SessionErrorsReducer, 
  board: BoardErrorsReducer
});