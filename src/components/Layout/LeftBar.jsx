import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 200,
    backgroundColor: theme.palette.background.default,
    padding: "75px 5px 25px 5px",
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  navLink: {
    textDecoration: "none",
    padding: "4px 8px",
    margin: "5px 0px",
    color: theme.palette.text.primary,
  },
  selected: {
    backgroundColor: theme.palette.text.disabled,
    color: theme.palette.background.default,
  },
}));

const pages = [
  {
    label: "Dashboard",
    path: "/",
  },
  {
    label: "Clients",
    path: "/add-client",
  },
  {
    label: "Projects",
    path: "/add-project",
  },
  {
    label: "Tasks",
    path: "/add-task",
  },
];

const LeftBar = () => {
  const classes = useStyles();
  return (
    <Box style={{ height: "100vh" }}>
      <div className={classes.root}>
        {pages.map((item) => (
          <NavLink
            key={item.label}
            exact
            activeClassName={classes.selected}
            className={classes.navLink}
            to={item.path}
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </Box>
  );
};

export default LeftBar;
