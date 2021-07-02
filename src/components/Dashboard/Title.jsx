import React from "react";
import { Typography, makeStyles } from "@material-ui/core";
import { Avatar } from "@material-ui/core";
import avatarImg from "../../assets/images/1.jpg";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginBottom: "30px",
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginRight: "20px",
  },
}));

const Title = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Avatar alt="Remy Sharp" src={avatarImg} className={classes.large} />
      <div>
        <Typography variant="h5">Hi, Maurice</Typography>
        <Typography variant="subtitle2">
          Here's your activity today, take a moment to have a look at this.
        </Typography>
      </div>
    </div>
  );
};

export default Title;
