import React from 'react';

import classes from 'modules/common/components/ContentEditor/renderer.module.css';

export const List = ({ data }) => {
  if (data.style === 'unordered') {
    return (
      <ul className={classes.UnorderedList}>
        {data.items.map((item, i) => (
          <li key={'ul li ' + i}>{item}</li>
        ))}
      </ul>
    );
  }

  return (
    <ol className={classes.OrderedList}>
      {data.items.map((item, i) => (
        <li key={'ul li ' + i}>{item}</li>
      ))}
    </ol>
  );
};
