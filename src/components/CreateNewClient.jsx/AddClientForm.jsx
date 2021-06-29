import React from "react";
import { Box, TextField, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { generateId } from "../../utils/common";

const AddClientForm = ({ SubmitClientData }) => {
  const { register, handleSubmit } = useForm();

  const submitData = (data) => {
    SubmitClientData({ ...data, ...generateId("client") });
  };
  return (
    <form onSubmit={handleSubmit(submitData)}>
      <TextField
        {...register("name")}
        fullWidth
        label="Name"
        margin="dense"
        variant="outlined"
      />
      <TextField
        {...register("email")}
        fullWidth
        label="Email"
        margin="dense"
        variant="outlined"
      />

      <Box marginY={3}>
        <Button
          fullWidth
          type="submit"
          variant="contained"
          color="primary"
          disableElevation
        >
          save
        </Button>
      </Box>
    </form>
  );
};

export default AddClientForm;
