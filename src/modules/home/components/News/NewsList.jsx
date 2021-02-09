import React from 'react';

import { NewsListItem } from 'modules/home/components/News/NewsListItem';

export const NewsList = ({ news }) => {
  return (
    <ul>
      {news.map((newsItem) => (
        <NewsListItem key={newsItem._id} news={newsItem} />
      ))}
    </ul>
  );
};
