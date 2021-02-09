import React from 'react';
import { useMediaQuery } from 'react-responsive';

import { Container } from 'modules/common/components/Container';
import { NavItem } from 'modules/common/components/BottomNavbar/NavItem/NavItem';

import classes from 'modules/common/components/BottomNavbar/styles.module.css';

const linksBottom = [
  {
    text: 'Home',
    link: '/',
  },
  {
    text: 'Dev Logs',
    link: '/devlogs',
  },
  {
    text: 'Forum',
    link: '/forum',
  },
  {
    text: 'Chat',
    link: '/chat',
  },
  {
    text: 'Reach Out',
    link: '/contact',
  },
];

export const BottomNavbar = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 765px)' });
  const navItemWidth = isTabletOrMobile ? '100%' : Math.floor(100 / linksBottom.length) - 1 + '%';

  return (
    <Container className={classes.NavbarContainer} justifyStart row fluid>
      <ul className={classes.BottomNavBar}>
        {linksBottom.map((link) => (
          <NavItem style={{ width: navItemWidth }} key={'Bottom Nav item ' + link.text} {...link} />
        ))}
      </ul>
    </Container>
  );
};
