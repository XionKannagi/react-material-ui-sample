import React from 'react';
import {
  makeStyles, 
  createStyles, 
  Theme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import HomeIcon from "@material-ui/icons/Home";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

import PageItem from "../molecules/PageItem";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: {
      paddingRight: 24,
    },
    toolbarIcon: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: "0 8px",
      ...theme.mixins.toolbar,
    },
    menuButton: {
      marginRight: 36,
    },
    menuButtonHidden: {
      display: "none",
    },
    paper: {
      padding: theme.spacing(2),
      display: "flex",
      overflow: "auto",
      flexDirection: "column",
    },
    title: {
      flexGrow: 1,
    },
  })
);

export interface SideBarProps  {
  openState: [boolean, React.Dispatch<boolean>],
  drawerVariant: "permanent" | "persistent" | "temporary",//typeof DrawerProps.arguments,
  drawerPaper: string
}

const SideBar: React.FC<SideBarProps> = (props) => {
  const drawerVariant = props.drawerVariant;
  const drawerPaper = props.drawerPaper;
  const classes = useStyles();
  const [open, setOpen] =  props.openState;
  
  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Drawer
      variant={drawerVariant}
      classes={{
        paper: drawerPaper,
      }}
      open={open}
    >
    <div className={classes.toolbarIcon}>
      <IconButton onClick={handleDrawerClose}>
        <ChevronLeftIcon />
      </IconButton>
    </div>
    <Divider />
    <List>
      <PageItem 
        linkTo="/"
        pageTitle="ホームページ">
        <HomeIcon />
      </PageItem>
      <PageItem
        linkTo="/products"
        pageTitle="商品名ページ">
        <ShoppingCartIcon />
      </PageItem>
      <PageItem 
        linkTo="/usage-stats"
        pageTitle="料金集計ページ">
        <MonetizationOnIcon />
      </PageItem>
    </List>
  </Drawer>
  );
}

SideBar.defaultProps = {}

export default SideBar;