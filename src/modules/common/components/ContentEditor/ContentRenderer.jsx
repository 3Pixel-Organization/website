import React from 'react';
import Output from 'editorjs-react-renderer';

import {
  Checklist,
  Codebox,
  Delimiter,
  Header,
  Paragraph,
  SimpleImage,
  Table,
  List,
  Quote,
} from 'modules/common/components/ContentEditor/BlockTypes';

export const ContentRenderer = ({ type, data }) => {
  switch (type) {
    case 'paragraph':
      return <Paragraph data={data} />;
    case 'header':
      return <Header data={data} />;
    case 'simpleImage':
      return <SimpleImage data={data} />;
    case 'delimiter':
      return <Delimiter />;
    case 'checklist':
      return <Checklist data={data} />;
    case 'codeBox':
      return <Codebox type={type} data={data} />;
    case 'table':
      return <Table data={data} />;
    case 'list':
      return <List data={data} />;
    case 'quote':
      return <Quote data={data} />;
    default:
      return <Output data={{ blocks: [{ type, data }] }} />;
  }
};
