import React from 'react';

import HeroImage from 'assets/hero.jpg';
import { Container } from 'components/container/Container';
import { Hero } from 'components/hero/Hero';
import { Card } from 'components/card/Card';
import { Page } from 'components/page/Page';

import { Video } from 'pages/home/Video';

export const Home = () => {
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
