import React, { useState, useEffect }  from "react";
import GenericTemplate from "../templates/GenericTemplate";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

// API周りの設定
import { UsageData } from '../../common/models';
import { getUsage } from '../../actions';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


const UsageStatsPage: React.FC = () => {
  const classes = useStyles();
  const [rows, setRows] = useState<UsageData[]>([]);
  
  const apiReq = async() => {
    const res = await getUsage();
    if(res.isSuccess) {
      const data: UsageData[] = res.data===null ?[] :res.data.result;
      setRows(data);
    }
  }
  
  //　ページロード時初回呼び出し
  useEffect(() => {
    apiReq();
  },[]);
  
  return (
    <GenericTemplate title="料金集計ページ">
      <button onClick={apiReq}>更新</button>
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
                <TableCell align="right">{row.usage_all}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </GenericTemplate>
  );
};

export default UsageStatsPage;