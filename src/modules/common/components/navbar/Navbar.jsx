import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { HiUserCircle } from 'react-icons/hi';

import logo from 'assets/logo.png';
import classes from 'modules/common/components/navbar/Navbar.module.css';
import { Container } from 'modules/common/components/container/Container';
import { useNavigation } from 'hooks/useNavigation';
import { NavItem } from 'modules/common/components/navbar/NavItem';
import { Nav } from 'modules/common/components/navbar/Nav';

export const Navbar = () => {
  const { makeNavigation } = useNavigation();

  return (
    <Container style={{ background: 'black', minHeight: '4rem' }} justifyCenter row>
      <div className={classes.Brand} style={{ cursor: 'pointer' }} onClick={makeNavigation('/')}>
        <img className={classes.BrandImage} src={logo} alt='Team 3Pixel logo' /> 3Pixel
      </div>
      <Nav>
        <NavItem text='Home' link='/' />
        <NavItem text='About Us' link='/about' />
        <NavItem text='Login' link='/login' icon={<FiLogIn />} loggedOut />
        <NavItem text='' link='/profile' icon={<HiUserCircle size={24} />} loggedIn />
      </Nav>
    </Container>
  );
};
