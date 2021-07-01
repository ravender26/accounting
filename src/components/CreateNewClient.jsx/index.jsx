/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Card,
  Container,
  makeStyles,
  Typography,
  Button,
} from "@material-ui/core";
import { addClientAction } from "../../redux/actions/clients";
import FormModal from "./../common/FormModal";
import AddClientForm from "./AddClientForm";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.palette.background.default,
    minHeight: "100vh",
  },
  card: {
    // marginBottom: "20px",
    // width: "35%",
  },
}));

const CreateNewClient = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const clients = useSelector((state) => state.clients);
  console.log(clients);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const SubmitClientData = (data) => {
    handleClose();
    dispatch(addClientAction(data));
  };

  return (
    <Container fixed className={classes.wrapper}>
      <Box paddingY={4}>
        <Typography gutterBottom variant="h5">
          Clients List
        </Typography>
        <Box marginBottom={5} marginTop={3}>
          <Button
            size="small"
            variant="contained"
            color="primary"
            disableElevation
            onClick={handleClickOpen}
          >
            +Add
          </Button>
          <div>
            <Link to="/add-project">projects</Link>
          </div>
          <div>
            <Link to="/">dashboard</Link>
          </div>
        </Box>
        {!!clients.length && (
          <Grid container spacing={2}>
            {clients.map((item) => (
              <Grid item xs={6} sm={4} md={3} key={item.id}>
                <Paper>
                  <Box paddingY={2} paddingX={3}>
                    <AccountCircleOutlinedIcon />
                    <Typography variant="h6">{item.name}</Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
      {open && (
        <FormModal title="Add New Client" open={open} handleClose={handleClose}>
          <AddClientForm SubmitClientData={SubmitClientData} />
        </FormModal>
      )}
    </Container>
  );
};

export default CreateNewClient;
