import React from 'react';
import { Flex } from '../Layout';

export const Renderer = ({ type, data }) => {
  switch (type) {
    case 'paragraph':
      return <p>{data.text}</p>;
    case 'header':
      const Header = 'h' + data.level;
      return <Header>{data.text}</Header>;
    case 'simpleImage':
      return (
        <Flex fluid>
          <img src={data.url} alt={data.caption} />
        </Flex>
      );
    case 'delimiter':
      return <hr />;
    case 'checklist':
      return (
        <ul>
          {data.items.map((item, i) => (
            <div key={item.text+i}>
              <input key={`${i} text - ${item.text}`} type="checkbox" checked={item.checked} disabled />
              <label key={`label ${i} ${item.text}`}>{item.text}</label>
            </div>
          ))}
        </ul>
      );
    default:
      return <p>{JSON.stringify(data)}</p>;
  }
};
