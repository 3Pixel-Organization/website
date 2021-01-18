import React from 'react';

import { Container } from '../../components/container/Container';
import { Hero } from '../../components/hero/Hero';
import { Card } from '../../components/card/Card';
import HeroImage from '../../assets/hero.jpg';

export const Home = () => {
  return (
    <>
      <Hero title='Team 3Pixel' subtitle='We make games.' image={HeroImage} />
      <Container justifyCenter column fadeIn>
        <Card style={{margin: '2rem 0'}}>
          <h1>🚧 Under Construction</h1>
          <hr />
          <p>We're working hard to get this website up and running.</p>
          <p>Keep tunned for upcoming 3Pixel news.</p>
        </Card>
      </Container>
    </>
  );
};
