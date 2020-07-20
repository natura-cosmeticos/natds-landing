import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@naturacosmeticos/natds-web";

export const TableWrapper = ({
  align,
  dividers,
  striped,
  rounded,
}: {
    align?: "center" | "inherit" | "justify" | "left" | "right" | undefined
    dividers?: boolean,
    striped?: boolean,
    rounded?: boolean,
  }) => (
  <Table
    dividers={dividers}
    striped={striped}
    rounded={rounded}
  >
    <TableHead>
      <TableRow>
        <TableCell align={align}>Header Cell</TableCell>
        <TableCell align={align}>Header Cell</TableCell>
        <TableCell align={align}>Header Cell</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell align={align}>Cell</TableCell>
        <TableCell align={align}>Cell</TableCell>
        <TableCell align={align}>Cell</TableCell>
      </TableRow>
      <TableRow>
        <TableCell align={align}>Cell</TableCell>
        <TableCell align={align}>Cell</TableCell>
        <TableCell align={align}>Cell</TableCell>
      </TableRow>
      <TableRow>
        <TableCell align={align}>Cell</TableCell>
        <TableCell align={align}>Cell</TableCell>
        <TableCell align={align}>Cell</TableCell>
      </TableRow>
      <TableRow>
        <TableCell align={align}>Cell</TableCell>
        <TableCell align={align}>Cell</TableCell>
        <TableCell align={align}>Cell</TableCell>
      </TableRow>
    </TableBody>
  </Table>
);
