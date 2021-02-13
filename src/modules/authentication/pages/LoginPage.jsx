import { useDispatch, useSelector } from 'react-redux';

import { Actions } from 'state/Actions';
import { useNavigation } from 'hooks/useNavigation';
import { useQueryParams } from 'hooks/useQueryParams';

import { Alert, Col, Container, Flex, Hero, Page, Row } from 'modules/common/components';
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
    <Page hero={<Hero title="Login" compact />}>
      <Container>
        <Row>
          <Col xs={12}>
            <Flex justifyCenter alignCenter>
              <DiscordButton />
            </Flex>
          </Col>
        </Row>
        <Row>
          <Flex style={{ padding: '1rem' }}>
            {msg && (
              <Alert type="success" style={{ marginBottom: '0.5rem' }}>
                {msg}
              </Alert>
            )}
            {error && (
              <Alert type="error">
                {error}
              </Alert>
            )}
          </Flex>
        </Row>
      </Container>
    </Page>
  );
};
