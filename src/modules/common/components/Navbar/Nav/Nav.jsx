import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { HiMenu } from 'react-icons/hi';

import { Flex } from 'modules/common/components/Layout';
import { Drawer } from 'modules/common/components/Drawer';
import classes from 'modules/common/components/Navbar/styles.module.css';

const RegularMenu = (children) => (
  <Flex as='ul' style={{ justifyContent: 'flex-end' }} alignCenter row fluid>
    {children}
  </Flex>
);

const MobileMenu = (children, open, setOpen) => {
  return (
    <Flex as='ul' style={{ justifyContent: 'flex-end' }} alignCenter row fluid>
      <li className={classes.NavItem} style={{ cursor: 'pointer' }} onClick={() => setOpen(true)}>
        <HiMenu size={32} />
      </li>
      <Drawer open={open} onClose={() => setOpen(false)}>
        {children}
      </Drawer>
    </Flex>
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
