import React from "react";
import { Box, TextField, Button, MenuItem } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { generateId } from "../../utils/common";

const AddProjectForm = ({ SubmitProjectData, clients }) => {
  const { register, handleSubmit } = useForm();

  const submitData = (data) => {
    SubmitProjectData({ ...data, ...generateId("project") });
  };
  return (
    <form onSubmit={handleSubmit(submitData)}>
      <TextField
        {...register("clientId")}
        fullWidth
        label="Choose Client"
        margin="dense"
        variant="outlined"
        select
      >
        {clients.length ? (
          clients.map((item) => (
            <MenuItem value={item.id}>{item.name}</MenuItem>
          ))
        ) : (
          <MenuItem value="">Not Available</MenuItem>
        )}
      </TextField>
      <TextField
        {...register("name")}
        fullWidth
        label="Name"
        margin="dense"
        variant="outlined"
      />
      <TextField
        {...register("description")}
        fullWidth
        multiline
        label="Description"
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

export default AddProjectForm;
