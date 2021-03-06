import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { HiUserCircle } from 'react-icons/hi';

import logo from 'assets/logo.png';
import classes from 'modules/common/components/Navbar/styles.module.css';
import { Flex } from 'modules/common/components/Layout';
import { useNavigation } from 'hooks/useNavigation';
import { NavItem } from 'modules/common/components/Navbar/NavItem/NavItem';
import { Nav } from 'modules/common/components/Navbar/Nav/Nav';

const links = [
  {
    text: 'Home',
    link: '/',
  },
  {
    text: 'Sign In',
    link: '/login',
    icon: <FiLogIn />,
    loggedOut: true,
  },
  {
    text: '',
    link: '/profile',
    icon: <HiUserCircle />,
    loggedIn: true,
  },
];

export const Navbar = () => {
  const { makeNavigation } = useNavigation();

  return (
    <Flex style={{ background: 'black', minHeight: '4rem' }} justifyCenter row fluid>
      <div className={classes.Brand} style={{ cursor: 'pointer' }} onClick={makeNavigation('/')}>
        <img className={classes.BrandImage} src={logo} alt="Team 3Pixel logo" /> 3Pixel
      </div>
      <Nav>
        {links.map((link) => (
          <NavItem key={'Nav item ' + link.text} {...link} />
        ))}
      </Nav>
    </Flex>
  );
};
