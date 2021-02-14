import React from 'react';

import { Flex } from 'modules/common/components/Layout';

import classes from 'modules/common/components/ContentEditor/renderer.module.css';
import classnames from 'classnames';

export const ContentRenderer = ({ type, data }) => {
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
        <Flex fluid justifyStart>
          {data.items.map((item, i) => (
            <Flex
              row
              fluid
              justifyStart
              alignCenter
              key={item.text + i}
              className={classes.CheckboxItem}
            >
              <Flex
                fluid
                justifyCenter
                alignCenter
                className={classnames(classes.CheckboxBox, {
                  [classes.CheckboxChecked]: item.checked,
                })}
              />
              <span className={classes.CheckboxLabel}>{item.text}</span>
            </Flex>
          ))}
        </Flex>
      );
    default:
      return <p>{JSON.stringify(data)}</p>;
  }
};
