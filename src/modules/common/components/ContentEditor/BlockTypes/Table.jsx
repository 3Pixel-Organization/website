import React from 'react';

import classes from 'modules/common/components/ContentEditor/renderer.module.css';

export const Table = ({ data }) => {
  const rows = [...data.content];

  if (rows.length === 0) {
    return <table />;
  }

  const headRow = rows.shift();

  const Head = (
    <thead>
      <tr>
        {headRow.map((col, i) => (
          <th key={'th' + i}>{col}</th>
        ))}
      </tr>
    </thead>
  );

  const Body = (
    <tbody>
      {rows.map((row, i) => (
        <tr key={'tr' + i}>
          {row.map((col, j) => (
            <td key={'td' + j}>{col}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );

  return (
    <table className={classes.Table}>
      {Head}
      {Body}
    </table>
  );
};
