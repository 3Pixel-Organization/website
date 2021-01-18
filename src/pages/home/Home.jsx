import React from 'react';

import { Container } from '../../components/container/Container';
import { Hero } from '../../components/hero/Hero';
import { Card } from '../../components/card/Card';
import HeroImage from '../../assets/hero.jpg';
import { Video } from './Video';

export const Home = () => {
  return (
    <>
      <Hero title='Team 3Pixel' subtitle='We make games.' image={HeroImage} />
      <Container justifyCenter column fadeIn>
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
      </Container>
    </>
  );
};
