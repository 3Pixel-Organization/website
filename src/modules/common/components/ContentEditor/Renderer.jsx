import React from 'react';

import { Flex } from 'modules/common/components/Layout';

import classes from 'modules/common/components/ContentEditor/renderer.module.css';

export const Renderer = ({ type, data }) => {
  switch (type) {
    case 'paragraph':
      return <p className={classes.Paragraph}>{data.text}</p>;
    case 'header':
      const Header = 'h' + data.level;
      return <Header>{data.text}</Header>;
    case 'simpleImage':
      return (
        <Flex fluid>
          <img style={{ width: '100%', maxHeight: '70vh' }} src={data.url} alt={data.caption} />
        </Flex>
      );
    case 'delimiter':
      return <hr />;
    case 'checklist':
      return (
        <ul>
          {data.items.map((item, i) => (
            <div key={item.text + i}>
              <input
                key={`${i} text - ${item.text}`}
                type="checkbox"
                checked={item.checked}
                disabled
              />
              <label key={`label ${i} ${item.text}`}>{item.text}</label>
            </div>
          ))}
        </ul>
      );
    default:
      return <p>{JSON.stringify(data)}</p>;
  }
};
