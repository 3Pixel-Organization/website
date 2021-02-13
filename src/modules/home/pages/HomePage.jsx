import React from 'react';
import { FaDiscord, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Container as GridContainer, Col, Row } from 'react-grid-system';

import HeroImage from 'assets/hero.jpg';
import { Container } from 'modules/common/components/Container';
import { Hero } from 'modules/common/components/Hero';
import { Card } from 'modules/common/components/Card';
import { Page } from 'modules/common/components/Page';

import { Video } from 'modules/home/components/Video';
import { NewsList } from 'modules/news';

export const HomePage = () => {
  return (
    <Page wide hero={<Hero title="Team 3Pixel" subtitle="We make games." image={HeroImage} />}>
      <GridContainer>
        <Row>
          <Col lg={7}>
            <Card>
              <h1>🎮 Team 3Pixel</h1>
              <hr />
              <Container>
                <p>
                  We are group of people starting to build fast games or flash project games. We are
                  working in those games to filter out people we can't rely on from people we can
                  rely on to start working on bigger, better and more stable games towards one day
                  building a company and staying as employees. As of now on game releases we will
                  all gain portfolio and letter of recommendation.
                </p>
              </Container>
              <h2>🖥 Our Links</h2>
              <hr />
              <Container>
                <p>
                  <strong>{<FaDiscord />} Discord</strong>{' '}
                  <a target="_blank" rel="noreferrer" href="https://discord.gg/BS6BVMJ">
                    3Pixel Fanbase
                  </a>
                </p>
                <p>
                  <strong>{<FaTwitter />} Twitter</strong>{' '}
                  <a target="_blank" rel="noreferrer" href="https://twitter.com/3PixelGameDev">
                    @3PixelGameDev
                  </a>
                </p>
                <p>
                  <strong>{<FaYoutube />} Youtube</strong>{' '}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.youtube.com/channel/UC0ap0oGPo5ZA1y7-MXbjGDQ"
                  >
                    Youtube Channel
                  </a>
                </p>
              </Container>
              <hr />
              <Container justifyCenter alignCenter fluid>
                <Video embed="https://www.youtube.com/embed/ce7gTqGik2s" />
              </Container>
            </Card>
          </Col>
          <Col lg={5}>
            <NewsList />
          </Col>
        </Row>
      </GridContainer>
    </Page>
  );
};
