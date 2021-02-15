import React from 'react';

import { Link } from 'react-router-dom';

import { Card, Flex } from 'modules/common/components';

import classes from 'modules/admin/components/Menu/styles.module.css';

export const Menu = ({ menuItems }) => {
  return (
    <Card>
      <Flex as="ul" fluid column>
        {menuItems.map((mi, i) => (
          <Link key={'mi' + i} to={mi.link} className={classes.ListItem}>
            <li>
              {mi.icon} {mi.text}
            </li>
          </Link>
        ))}
      </Flex>
    </Card>
  );
};
