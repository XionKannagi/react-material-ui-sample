import React from 'react';
import {
  makeStyles, 
  createStyles, 
  Theme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import HomeIcon from "@material-ui/icons/Home";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

export interface SideBarProps  {
  openState: [boolean, React.Dispatch<boolean>],
  drawerVariant: "permanent" | "persistent" | "temporary",//typeof DrawerProps.arguments,
  drawerPaper: string
} 

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
    link: {
      textDecoration: "none",
      color: theme.palette.text.secondary,
    },
  })
);

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
      <Link to="/" className={classes.link}>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="トップページ" />
        </ListItem>
      </Link>
      <Link to="/products" className={classes.link}>
        <ListItem button>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="商品ページ" />
        </ListItem>
      </Link>
      <Link to="/usage-stats" className={classes.link}>
        <ListItem button>
          <ListItemIcon>
            <MonetizationOnIcon />
          </ListItemIcon>
          <ListItemText primary="料金集計ページ" />
        </ListItem>
      </Link>
    </List>
  </Drawer>
  );
}

SideBar.defaultProps = {

}

export default SideBar;