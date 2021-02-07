import React from 'react';

import HeroImage from 'assets/hero.jpg';
import { Container } from 'modules/common/components/Container';
import { Hero } from 'modules/common/components/Hero';
import { Card } from 'modules/common/components/Card';
import { Page } from 'modules/common/components/Page';

import { Video } from 'modules/home/components/Video';

export const HomePage = () => {
  return (
    <Page hero={<Hero title='Team 3Pixel' subtitle='We make games.' image={HeroImage} />}>
      <Card style={{ margin: '2rem 0' }}>
        <h1>🚧 Under Construction</h1>
        <hr />
        <Container justifyCenter alignCenter fluid>
          <p>We're working hard to get this website up and running.</p>
          <p>Keep tunned for upcoming 3Pixel news.</p>
          <br />
          <Video embed='https://www.youtube.com/embed/ce7gTqGik2s' />
        </Container>
      </Card>
    </Page>
  );
};
