import { makeStyles } from "@material-ui/core";
import React from "react";
import LeftBar from "./LeftBar";
import Navbar from "./Navbar";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "stretch",
    minHeight: "100vh",
  },
  main: {
    flexGrow: 1,
  },
  wrap: {
    padding: "25px",
  },
});

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <LeftBar />
      <main className={classes.main}>
        <Navbar />
        <div className={classes.wrap}>{children}</div>
      </main>
    </div>
  );
};

export default Layout;
