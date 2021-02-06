import { combineReducers } from 'redux';

import { userReducer } from 'state/reducers/user.reducer';

export const rootReducer = combineReducers({
  auth: userReducer,
});
