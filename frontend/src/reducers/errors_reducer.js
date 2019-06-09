import { combineReducers } from 'redux';

import SessionErrorsReducer from './session_errors_reducer';
import BoardsErrorsReducer from './boards_errors_reducer';

export default combineReducers({
  session: SessionErrorsReducer, 
  boards: BoardsErrorsReducer
});