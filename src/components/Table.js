import React from 'react';
import TableRow from './TableRow';

export default props => (
  <table>
    <tbody>
      {props.grid.map((row, index) => (
        <TableRow key={index} row={row} index={index} />
      ))}
    </tbody>
  </table>
);
