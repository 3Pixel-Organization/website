import React from 'react';
import { FaDiscord, FaTwitter, FaYoutube } from 'react-icons/fa';

import HeroImage from 'assets/hero.jpg';
import { Flex, Hero, Card, Page, Container, Row, Col } from 'modules/common/components';

import { Video } from 'modules/home/components/Video';
import { NewsList } from 'modules/news';

export const HomePage = () => {
  return (
    <Page hero={<Hero title="Team 3Pixel" subtitle="We make games." image={HeroImage} />}>
      <Container>
        <Row>
          <Col lg={7}>
            <Card>
              <h1>🎮 Team 3Pixel</h1>
              <hr />
              <Flex>
                <p>
                  We are group of people starting to build fast games or flash project games. We are
                  working in those games to filter out people we can't rely on from people we can
                  rely on to start working on bigger, better and more stable games towards one day
                  building a company and staying as employees. As of now on game releases we will
                  all gain portfolio and letter of recommendation.
                </p>
              </Flex>
              <h2>🖥 Our Links</h2>
              <hr />
              <Flex>
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
              </Flex>
              <hr />
              <Flex justifyCenter alignCenter fluid>
                <Video embed="https://www.youtube.com/embed/ce7gTqGik2s" />
              </Flex>
            </Card>
          </Col>
          <Col lg={5}>
            <NewsList />
          </Col>
        </Row>
      </Container>
    </Page>
  );
};
