import React, { useState, useEffect }  from "react";
import { useDispatch, useSelector } from "react-redux";
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
//import { UsageData } from '../../common/models';
//import { getUsageData } from '../../api';
import { RootState, AppDispatch } from "../../store";
import { fetchAsync }  from "../../slices/UsageDataSlice";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const UsageStatsPage: React.FC = (props) => {
  const classes = useStyles();
  
  /* setStateでのデータ更新をReduxToolKitでの実装に変更 */
  // const [usageData, setUsageData] = useState<UsageData[]>([]);
  // const apiReq = async () => {
  //   const res = await getUsageData();
  //   if(res.isSuccess) {
  //     const data: UsageData[] = res.data===null ?[] :res.data.result;
  //     setUsageData(data);
  //   }
  // }

  const usageData = useSelector((state: RootState) => state.usageData.payload);
  //const loading = useSelector((state: RootState) => state.usageData.loading);
  //const error = useSelector((state: RootState) => state.usageData.error);

  const dispatch: AppDispatch = useDispatch();
  
  //　ページロード時初回呼び出し
  useEffect(() => {
    //apiReq()
    dispatch(fetchAsync());
  },[dispatch]);
  
  return (
    <GenericTemplate title="料金集計ページ">
      <button onClick={() => dispatch(fetchAsync())}>更新</button>
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
            {usageData.map((row) => (
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