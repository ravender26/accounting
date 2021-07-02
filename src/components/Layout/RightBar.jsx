import { makeStyles } from "@material-ui/core";
import React from "react";
import SectionFour from "../RightBar/SectionFour";
import SectionOne from "../RightBar/SectionOne";
import SectionThree from "../RightBar/SectionThree";
import SectionTwo from "../RightBar/SectionTwo";

const useStyles = makeStyles({
  root: {
    width: 390,
    boxShadow:
      "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset",
  },
});

const RightBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </div>
  );
};

export default RightBar;
