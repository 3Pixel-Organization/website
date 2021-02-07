import React from 'react';

import classes from 'modules/common/components/drawer/Drawer.module.css';
import { Container } from 'modules/common/components/container/Container';

export const Drawer = ({ children, open, onClose }) => {
  const navItemClick = (e) => {
    if (e.target.tagName === 'A') {
      onClose();
    }
  };
  return (
    <>
      <div
        className={classes.Backdrop}
        style={{ display: open ? 'block' : 'none' }}
        onClick={onClose}
      />
      <Container
        className={classes.Drawer}
        style={{ transform: open ? 'translateX(0px)' : 'translateX(60vw)' }}
        column
        onClick={navItemClick}
      >
        {children}
      </Container>
    </>
  );
};
