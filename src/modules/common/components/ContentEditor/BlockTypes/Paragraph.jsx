import React from 'react';
import Output from 'editorjs-react-renderer';

export const Paragraph = ({ data }) => {
  return <Output data={{ blocks: [{ type: 'paragraph', data }] }} />;
};
