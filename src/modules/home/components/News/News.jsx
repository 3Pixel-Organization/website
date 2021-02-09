import React from 'react';

import { NewsList } from 'modules/home/components/News/NewsList';

const news = [
  {
    _id: '000001',
    title: 'Hello World!',
    description: 'This is our hello world news post.',
    tags: ['hello'],
  },
];

export const News = () => {
  return (
    <div>
      <NewsList news={news} />
    </div>
  );
};
