import React from 'react';
import classnames from 'classnames';

import { Flex } from 'modules/common/components/Layout';

import classes from 'modules/common/components/ContentEditor/renderer.module.css';

export const Checklist = ({ data }) => {
  return (
    <Flex fluid justifyStart>
      {data.items.map((item, i) => (
        <Flex
          row
          fluid
          justifyStart
          alignCenter
          key={item.text + i}
          className={classes.CheckboxItem}
        >
          <Flex
            fluid
            justifyCenter
            alignCenter
            className={classnames(classes.CheckboxBox, {
              [classes.CheckboxChecked]: item.checked,
            })}
          />
          <span className={classes.CheckboxLabel}>{item.text}</span>
        </Flex>
      ))}
    </Flex>
  );
};
