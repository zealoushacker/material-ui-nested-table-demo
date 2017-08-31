import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const NestedTable = () => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>Foo</TableHeaderColumn>
        <TableHeaderColumn>Bar</TableHeaderColumn>
        <TableHeaderColumn>Baz</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableRowColumn>A</TableRowColumn>
        <TableRowColumn>B</TableRowColumn>
        <TableRowColumn>C</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>D</TableRowColumn>
        <TableRowColumn>E</TableRowColumn>
        <TableRowColumn>F</TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
);

export default NestedTable;
