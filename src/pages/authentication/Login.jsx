import { useDispatch, useSelector } from 'react-redux';
import { Alert } from '../../components/alert/Alert';
import { Container } from '../../components/container/Container';

import { Page } from '../../components/page/Page';
import { useNavigation } from '../../hooks/useNavigation';
import { useParams } from '../../hooks/useParams';
import { Actions } from '../../state/Actions';
import { DiscordButton } from './DiscordButton';

export const Login = () => {
  const { navigate } = useNavigation();
  const { refresh, access, msg, error } = useParams();
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
          <Alert center type='success'>
            {msg}
          </Alert>
        )}
        {error && (
          <Alert center type='error'>
            {error}
          </Alert>
        )}
      </Container>
    </Page>
  );
};
