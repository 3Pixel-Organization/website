import React from 'react';

export const NewsListItem = ({ news }) => {
  return <li>{JSON.stringify(news)}</li>;
};
