import React from 'react';
import TableCell from './TableCell';

export default props => (
  <tr>
    {props.row.map((color, cellIndex) => (
      <TableCell
        key={cellIndex}
        row={props.index}
        col={cellIndex}
        color={color}
      />
    ))}
  </tr>
);
