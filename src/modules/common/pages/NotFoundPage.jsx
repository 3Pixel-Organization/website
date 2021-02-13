import React from 'react';
import { useHistory } from 'react-router';
import { Container, Col, Row } from 'react-grid-system';

import HeroImage from 'assets/hero.jpg';
import { Hero, Page } from 'modules/common/components';

const NotFoundHero = (
  <Hero compact title="Uh oh..." subtitle="We don't have anything here yet..." image={HeroImage} />
);

export const NotFoundPage = () => {
  const { goBack, location } = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    goBack();
  };

  return (
    <Page hero={NotFoundHero} alignCenter>
      <Container>
        <Row>
          <Col xs={12}>
            <h1>
              <a href={'/#' + location.pathname} onClick={handleClick}>
                Go Back
              </a>
            </h1>
          </Col>
        </Row>
      </Container>
    </Page>
  );
};
