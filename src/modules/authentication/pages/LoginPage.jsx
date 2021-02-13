import { useDispatch, useSelector } from 'react-redux';

import { Actions } from 'state/Actions';
import { useNavigation } from 'hooks/useNavigation';
import { useQueryParams } from 'hooks/useQueryParams';
import { Alert } from 'modules/common/components/Alert';
import { Container } from 'modules/common/components/Container';
import { Page } from 'modules/common/components/Page';

import { DiscordButton } from 'modules/authentication/components/DiscordButton';

export const LoginPage = () => {
  const { navigate } = useNavigation();
  const { refresh, access, msg, error } = useQueryParams();
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  if (auth.user) {
    setImmediate(() => navigate('/'));
    return null;
  }

  if (refresh) {
    localStorage.setItem('3pixel.authToken', refresh);
  }
  if (access) {
    setImmediate(() => dispatch({ type: Actions.UPDATE_ACCESS_TOKEN, payload: access }));
    return null;
  }

  return (
    <Page alignCenter>
      <h1>Login</h1>
      <DiscordButton />
      <Container style={{ width: '16rem', padding: '1rem' }}>
        {msg && (
          <Alert center type="success">
            {msg}
          </Alert>
        )}
        {error && (
          <Alert center type="error">
            {error}
          </Alert>
        )}
      </Container>
    </Page>
  );
};
