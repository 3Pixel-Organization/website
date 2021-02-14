import React from 'react';

import { Flex } from 'modules/common/components/Layout';

import classes from 'modules/common/components/ContentEditor/renderer.module.css';

export const Quote = ({ data }) => {
  return (
    <Flex fluid alignCenter={data.alignment === 'center'} className={classes.Quote}>
      <blockquote>{data.text}</blockquote>
      <span>{data.caption}</span>
    </Flex>
  );
};
