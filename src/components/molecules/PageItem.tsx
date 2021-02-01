import React from "react";
import { Link } from "react-router-dom";
import {
  makeStyles, 
  createStyles, 
  Theme } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      textDecoration: "none",
      color: theme.palette.text.secondary,
    },
  }));

interface PageItemProps {
  children: React.ReactNode,
  linkTo: string,
  pageTitle: string
}

const PageItem: React.FC<PageItemProps> = (props) => {
  const classes = useStyles();
  return(
    <Link to={props.linkTo} className={classes.link}>
    <ListItem button>
      <ListItemIcon>
        { props.children }
      </ListItemIcon>
      <ListItemText primary={props.pageTitle} />
    </ListItem>
    </Link>
  );
}

export default PageItem;