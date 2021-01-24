import React from 'react';
import clsx from "clsx";
import {
  makeStyles, 
  createStyles, 
  Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import AppBarProps from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";

export interface CustomAppBarProps  {
  openState: [boolean, React.Dispatch<boolean>],
  darkModeState:[boolean, React.Dispatch<boolean>],
  appBarPosition: typeof AppBarProps.arguments,
  appBarClassName: string,
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
  })
);

const CustomAppBar: React.FC<CustomAppBarProps> = (props) => {
  const appBarPosition = props.appBarPosition;
  const appBarClassName = props.appBarClassName;
  const classes = useStyles();
  const [open, setOpen] =  props.openState;
  const [prefersDarkMode, setPrefersDarkMode] = props.darkModeState;
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleChange = (e: any) => {
    localStorage.setItem("prefersDarkMode", prefersDarkMode? "false" : "true");
    setPrefersDarkMode(!prefersDarkMode);
  };
  return (
    <AppBar 
      position={appBarPosition}
      className={appBarClassName}
    >
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          className={clsx(
            classes.menuButton,
            open && classes.menuButtonHidden
          )}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          className={classes.title}
        >
          管理画面
        </Typography>
        <FormControlLabel
          control={
            <Switch checked={prefersDarkMode} onChange={handleChange} color="default" />
          }
          label=""
        />
      </Toolbar>
    </AppBar>
  );
}

CustomAppBar.defaultProps = {

}

export default CustomAppBar;