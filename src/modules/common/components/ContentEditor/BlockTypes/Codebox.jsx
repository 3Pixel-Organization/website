import React from 'react';
import Output from 'editorjs-react-renderer';

export const Codebox = ({ type, data }) => {
  return <Output data={{ blocks: [{ type, data }] }} />;
};
