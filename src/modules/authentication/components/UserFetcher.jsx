/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Authentication } from 'modules/authentication';

export const UserFetcher = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => Authentication.fetchNewAccessToken(auth, dispatch), []);
  useEffect(() => Authentication.fetchUser(auth, dispatch), [auth.tokens.access]);

  return null;
};
