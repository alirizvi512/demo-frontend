import React from "react";
import {
  withStyles,
  Card,
  CardContent,
  Typography,
  IconButton
} from "@material-ui/core";
import { DeleteOutlined, EditOutlined } from "@material-ui/icons";
import PropTypes from "prop-types";
import Styles from "../style/Styles";

const ListCard = props => {
  const {
    classes,
    id,
    title,
    body,
    schedule,
    handleUpdate,
    removeData
  } = props;
  return (
    <Card className={classes.card} elevation={1}>
      <CardContent>
        <IconButton
          aria-label="Update"
          className={classes.edit}
          onClick={e => handleUpdate(e, id)}
        >
          <EditOutlined />
        </IconButton>
        <IconButton
          aria-label="Delete"
          className={classes.delete}
          onClick={() => removeData(id)}
        >
          <DeleteOutlined />
        </IconButton>
        <Typography variant="h4" className={classes.name}>
          {title}
        </Typography>
        <Typography variant="h6" className={classes.body}>
          {body}
        </Typography>
        <Typography variant="body1" className={classes.details}>
          {schedule}
        </Typography>
      </CardContent>
    </Card>
  );
};

ListCard.propTypes = {
  classes: PropTypes.object.isRequired,
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  schedule: PropTypes.string.isRequired,
  handleUpdate: PropTypes.func.isRequired,
  removeData: PropTypes.func.isRequired
};

export default withStyles(Styles)(ListCard);
