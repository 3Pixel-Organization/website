import React from 'react';

import classes from 'modules/common/components/Drawer/styles.module.css';
import { Flex } from 'modules/common/components/Layout';

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
      <Flex
        className={classes.Drawer}
        style={{ transform: open ? 'translateX(0px)' : 'translateX(60vw)' }}
        column
        onClick={navItemClick}
      >
        {children}
      </Flex>
    </>
  );
};
