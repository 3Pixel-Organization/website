import React from 'react';
import { Link } from 'react-router-dom';

export const PostErrorMessage = ({ error }) => {
  if (error.response?.status === 404) {
    return (
      <>
        <h1>Post not found</h1>
        <p>
          Do you want to
          <Link to="/news"> go back</Link>?
        </p>
      </>
    );
  }
  return <h1>Oh no... Something bad happened. Try again maybe?</h1>;
};
