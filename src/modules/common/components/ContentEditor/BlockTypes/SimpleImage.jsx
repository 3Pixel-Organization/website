import React from 'react';

import { Flex } from 'modules/common/components/Layout';

export const SimpleImage = ({ data }) => {
  return (
    <Flex fluid>
      <img style={{ width: '100%', maxHeight: '70vh' }} src={data.url} alt={data.caption} />
    </Flex>
  );
};
