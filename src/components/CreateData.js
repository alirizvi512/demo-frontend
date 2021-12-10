import React from "react";
import { withStyles, TextField, Button } from "@material-ui/core";
import { DateTimePicker } from '@material-ui/pickers';
import PropTypes from "prop-types";
import Styles from "../style/Styles.js";

const CreateData = props => {
  const {
    id,
    title,
    body,
    schedule,
    handleChange,
    handleDateChange,
    addData,
    saveUpdate,
    classes,
    isEditing
  } = props;

  return (
    <div className={classes.formWrapper}>
        <TextField
          id="title-id"
          name="Title"
          label="Title"
          onChange={handleChange}
          defaultValue={title}
          fullWidth
          required
        />
        <TextField
          id="body-id"
          name="Body"
          label="Body"
          onChange={handleChange}
          defaultValue={body}
          fullWidth
          required
        />
        <br />
        <DateTimePicker
          style={{
            width : '100%',
            marginTop : '5%'
          }}
          name="Schedule"
          label="Schedule"
          inputVariant="outlined"
          onChange={handleDateChange}
          value={schedule}
        />
        {isEditing ? (
          <Button
            type="submit"
            variant="outlined"
            className={classes.button}
            onClick={e => saveUpdate(e, id)}
            fullWidth
          >
            Update
          </Button>
        ) : (
          <Button
            type="submit"
            variant="outlined"
            className={classes.button}
            onClick={() => { alert('Hello');addData()}}
            fullWidth
          >
            Submit
          </Button>
        )}
    </div>
  );
};

CreateData.propTypes = {
  classes: PropTypes.object.isRequired,
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  schedule: PropTypes.instanceOf(Date).isRequired,
  addData: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  saveUpdate: PropTypes.func.isRequired
};

export default withStyles(Styles)(CreateData);
