import produce from 'immer';

import { Actions } from 'state/Actions';
import { setAccessToken } from '../../modules/common/services/Axios';

const initialState = {
  user: 0,
  tokens: {
    refresh: localStorage.getItem('3pixel.authToken'),
    access: undefined,
  },
};

export const userReducer = produce((draft, action) => {
  switch (action.type) {
    case Actions.LOAD_USER:
      draft.user = action.payload;
      break;
    case Actions.UPDATE_ACCESS_TOKEN:
      draft.tokens.access = action.payload;
      setAccessToken(action.payload);
      break;
    case Actions.LOGIN:
      draft.user = action.payload.user;
      draft.tokens = action.payload.tokens;
      localStorage.setItem('3pixel.authToken', action.payload.tokens.refresh);
      break;
    case Actions.LOGOUT:
      draft.user = null;
      draft.tokens = { refresh: null, access: null };
      localStorage.removeItem('3pixel.authToken');
      break;
    default:
      if (!action.type.includes('@@')) {
        throw new Error(`Unhandled action type ${action?.type ?? action}`);
      }
      break;
  }
}, initialState);
