import React from "react";
import GenericTemplate from "../templates/GenericTemplate";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const createData = (
  name: string,
  adrress: string,
  usage: number,
  sum: number
) => {
  return { name, adrress, usage, sum };
};

const rows = [
  createData("田中太郎", "t.taro@example.com", 20000, 120080),
  createData("山田花子", "y.hanako@example.com", 4000, 48000),
  createData("山本良雄", "y.yoshio@example.com", 50000, 360000),
  createData("齋藤圭介", "s.keisuke@example.com", 12000, 56300),
  createData("白鳥香苗", "s.kanae@example.com", 12500, 180000),
];

const UsageStatsPage: React.FC = () => {
  const classes = useStyles();
  
  return (
    <GenericTemplate title="料金集計ページ">
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>利用者</TableCell>
              <TableCell align="right">連絡先</TableCell>
              <TableCell align="right">月額利用料</TableCell>
              <TableCell align="right">累計利用料</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.adrress}</TableCell>
                <TableCell align="right">{row.usage}</TableCell>
                <TableCell align="right">{row.sum}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </GenericTemplate>
  );
};

export default UsageStatsPage;