import React from 'react';
import { useQuery } from 'react-query';
import { ImCross } from 'react-icons/im';

import { Alert } from 'modules/common/components';
import { fetchPostList } from 'modules/news/services/News';
import { NewsListItem } from './NewsListItem';

const makeNewsList = (data) => {
  if (data?.length === 0) {
    return [<NewsListItem key='no news' blank/>]
  }
  if (data) {
    return data.map((post) => <NewsListItem key={post._id} post={post} />);
  }
  return null;
}

export const NewsList = () => {
  const { data, isLoading, error } = useQuery('posts', fetchPostList);

  return (
    <div>
      {isLoading && <h3>Loading recent news...</h3>}
      {error && (
        <Alert style={{ display: 'flex', alignItems: 'center' }} type="error">
          <ImCross style={{ marginRight: '0.5rem' }} />
          {error?.message ?? error}
        </Alert>
      )}
      {makeNewsList(data)}
    </div>
  );
};
