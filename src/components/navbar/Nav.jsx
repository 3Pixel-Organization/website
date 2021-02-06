import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { HiMenu } from 'react-icons/hi';

import { Container } from 'components/container/Container';
import { Drawer } from 'components/drawer/Drawer';
import classes from 'components/navbar/Navbar.module.css';

const RegularMenu = (children) => (
  <Container as='ul' style={{ justifyContent: 'flex-end' }} alignCenter row fluid>
    {children}
  </Container>
);

const MobileMenu = (children, open, setOpen) => {
  return (
    <Container as='ul' style={{ justifyContent: 'flex-end' }} alignCenter row fluid>
      <li className={classes.NavItem} style={{ cursor: 'pointer' }} onClick={() => setOpen(true)}>
        <HiMenu size={32} />
      </li>
      <Drawer open={open} onClose={() => setOpen(false)}>
        {children}
      </Drawer>
    </Container>
  );
};

export const Nav = ({ children }) => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 765px)' });
  const [open, setOpen] = useState(false);

  return (
    <nav className={classes.Links}>
      {isTabletOrMobile ? MobileMenu(children, open, setOpen) : RegularMenu(children)}
    </nav>
  );
};
