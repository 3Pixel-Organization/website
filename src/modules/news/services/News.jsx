import { toast } from 'react-toastify';

import { axios } from 'modules/common/services/Axios';

export const fetchPostList = async () => {
  let res;
  try {
    res = await axios.get(`/news`);
  } catch (err) {
    throw rethrow(err, 'Posts fetching failed');
  }

  return res.data;
};

export const fetchPostBySlug = async ({ queryKey }) => {
  const [, slug] = queryKey;
  let res;
  try {
    res = await axios.get(`/news/${slug}`);
  } catch (err) {
    throw rethrow(err, 'Post fetching failed');
  }

  if (res?.data?.content?.length > 0) {
    // parses the json into an object
    formatPostBlocksForFrontend([res.data]);
  }
  return res.data;
};

export const createPost = (post, token) => {
  if (!token) return;

  // block transform necessary for api
  post.content = post.content.map(formatPostBlocksForBackend);

  return axios
    .post('/news', post)
    .then((res) => res.data.slug)
    .catch((err) => {
      console.error(err.response);
      const data = err.response.data;
      const errorSpan = (
        <span>
          Could not create post.
          <br />
          {data?.message ?? data?.[0]?.message ?? (typeof data === 'string' ? data : '')}
        </span>
      );
      toast(errorSpan, {
        type: 'error',
      });
    });
};

function formatPostBlocksForBackend(block) {
  // the data must be in json format
  return { ...block, data: JSON.stringify(block.data) };
}

function formatPostBlocksForFrontend(data) {
  data.forEach((post) => post.content.forEach((block) => (block.data = JSON.parse(block.data))));
}

function rethrow(err, message) {
  const error = new Error(message);
  if (err.response) {
    error.response = err.response;
  }
  return error;
}
