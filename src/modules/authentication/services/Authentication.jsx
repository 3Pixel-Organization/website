import { Actions } from 'state/Actions';

import { axios } from 'modules/common/services/Axios';

export const fetchNewAccessToken = (auth, dispatch) => {
  axios
    .post('/auth/token', null, {
      headers: { Authorization: `Bearer ${auth.tokens.refresh}` },
    })
    .then((res) => {
      dispatch({ type: Actions.UPDATE_ACCESS_TOKEN, payload: res.data.token });
    })
    .catch((err) => {
      if (err.response?.status === 403 || err.response?.status === 401) {
        // if (!auth.tokens.access) return;
        dispatch({ type: Actions.LOGOUT });
      }
    });
};

export const fetchUser = (auth, dispatch) => {
  if (!auth.tokens.access) return;
  axios
    .get('/auth/me')
    .then((res) => {
      dispatch({ type: Actions.LOAD_USER, payload: res.data });
    })
    .catch((err) => {
      if (err.response?.status === 403 || err.response?.status === 401) {
        dispatch({ type: Actions.LOGOUT });
      }
    });
};

export const checkForPermission = (user, permission) => {
  if (!user) {
    return false;
  }

  for (const role of user.roles) {
    for (const perm of role.permissions) {
      if (perm.module + '.' + perm.capability === permission) {
        return true;
      }
    }
  }

  return false;
};
