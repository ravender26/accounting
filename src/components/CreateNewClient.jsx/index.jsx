import React from "react";
import {
  Box,
  Card,
  Container,
  makeStyles,
  Typography,
  Button,
} from "@material-ui/core";
import AddClientsModal from "./AddClientsModal";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.palette.background.default,
    minHeight: "100vh",
  },
  card: {
    marginBottom: "20px",
    width: "35%",
  },
}));

const CreateNewClient = () => {
  const [clientsList, setClientsList] = useState([]);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addClient = (data, tasks) => {
    let clientData = {
      ...data,
      taskList: [...tasks],
    };
    let temp = [...clientsList];
    temp.push(clientData);
    setClientsList(temp);
  };

  const classes = useStyles();

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
        </Box>
        {!!clientsList.length && (
          <Box>
            {clientsList.map((item) => (
              <Card
                key={item.companyName}
                className={classes.card}
                variant="outlined"
              >
                <Box paddingY={1} paddingX={3}>
                  <Typography variant="h7">{item.companyName}</Typography>
                </Box>
              </Card>
            ))}
          </Box>
        )}
      </Box>
      {open && (
        <AddClientsModal
          addClient={addClient}
          open={open}
          handleClose={handleClose}
        />
      )}
    </Container>
  );
};

export default CreateNewClient;
