import React from 'react';

import { Page } from 'components/page/Page';
import { Hero } from 'components/hero/Hero';
import { Card } from 'components/card/Card';
import HeroImage from 'assets/hero.jpg';

export const About = () => {
  return (
    <Page hero={<Hero title='About Us' subtitle='This is what we do' image={HeroImage} />}>
      <Card style={{ margin: '2rem 0' }}>
        <h1>🎮 Team 3Pixel</h1>
        <hr />
        <p>
          We are group of people starting to build fast games or flash project games. We are working
          in those games to filter out people we can't rely on from people we can rely on to start
          working on bigger, better and more stable games towards one day building a company and
          staying as employees. As of now on game releases we will all gain portfolio and letter of
          recommendation.
        </p>
      </Card>
      <Card style={{ marginBottom: '2rem' }}>
        <h2>🖥 Our Links</h2>
        <hr />
        <p>
          <strong>Discord</strong>{' '}
          <a target='_blank' rel='noreferrer' href='https://discord.gg/BS6BVMJ'>
            https://discord.gg/BS6BVMJ
          </a>
        </p>
      </Card>
    </Page>
  );
};
