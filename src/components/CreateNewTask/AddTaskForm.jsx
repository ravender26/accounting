import React from "react";
import { Box, TextField, Button, MenuItem } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { generateId } from "../../utils/common";

const AddTaskForm = ({ SubmitTaskData, projects }) => {
  const { register, handleSubmit } = useForm();

  const submitData = (data) => {
    SubmitTaskData({ ...data, ...generateId("task") });
  };
  return (
    <form onSubmit={handleSubmit(submitData)}>
      <TextField
        {...register("projectId")}
        fullWidth
        label="Choose Project"
        margin="dense"
        variant="outlined"
        select
      >
        {projects.length ? (
          projects.map((item) => (
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
        {...register("summary")}
        fullWidth
        label="Summary"
        margin="dense"
        variant="outlined"
        multiline
      />
      <TextField
        {...register("hourlyPrice")}
        fullWidth
        type="number"
        label="Hourly Price"
        margin="dense"
        variant="outlined"
      />

      <TextField
        {...register("timeTaken")}
        fullWidth
        type="number"
        label="Time Taken"
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

export default AddTaskForm;
