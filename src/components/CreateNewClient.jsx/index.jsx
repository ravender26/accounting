/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button } from "@material-ui/core";
import { addClientAction } from "../../redux/actions/clients";
import FormModal from "./../common/FormModal";
import AddClientForm from "./AddClientForm";
import { Grid } from "@material-ui/core";
import Heading from "../common/Heading";
import ClientCard from "./ClientCard";

const CreateNewClient = () => {
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
    <Box paddingBottom={3}>
      <Heading name="Clients List" />
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
      {!!clients.length && (
        <Grid container spacing={2}>
          {clients.map((item) => (
            <Grid item xs={6} sm={4} md={3} key={item.id}>
              <ClientCard item={item} />
            </Grid>
          ))}
        </Grid>
      )}
      {open && (
        <FormModal title="Add New Client" open={open} handleClose={handleClose}>
          <AddClientForm SubmitClientData={SubmitClientData} />
        </FormModal>
      )}
    </Box>
  );
};

export default CreateNewClient;
