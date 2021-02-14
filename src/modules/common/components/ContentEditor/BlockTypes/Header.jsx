import React from 'react';

export const Header = ({ data }) => {
  const Header = 'h' + data.level;
  return <Header>{data.text}</Header>;
};
