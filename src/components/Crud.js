import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import CreateData from "./CreateData.js";
import DataLists from "./DataLists.js";
import moment from "moment";
import { createNotification, removeNotification, updateNotification, getNotifications } from "./service.js";

class Crud extends Component {
  constructor(props) {
    super(props);

    getNotifications()
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error(err);
    })

    this.state = {
      dataLists: [
        {
          id: Math.random(),
          title: "Tony Stark",
          body: "Iron Man",
          schedule: moment().format('DD-MM-YYYY')
        },
        {
          id: Math.random(),
          title: "Steve Rogers",
          body: "Captain America",
          schedule: moment().format('DD-MM-YYYY')
        },
        {
          id: Math.random(),
          title: "Thor",
          body: "God of Thunder",
          schedule: moment().format('DD-MM-YYYY')
        }
      ],
      id: null,
      title: "",
      body: "",
      schedule: moment().format('DD-MM-YYYY'),
      isEditing: false
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleDateChange = e => {
    console.log(moment(e).date);
  }

  //To add data to the dataList array
  addData = e => {
    const { title, body, schedule } = this.state;
    if (!title || !body || !schedule) return;
    // API Calling
    createNotification({
      title: this.state.title,
      body: this.state.body,
      schedule: this.state.schedule
    })
    this.reset();
  };

  //To reset the form fields
  reset = () => {
    this.setState({
      title: "",
      body: "",
      schedule: ""
    });
  };

  //To remove the data from the list
  removeData = Id => {

    // API Calling
    let dataLists = this.state.dataLists.filter(data => {
      return data.Id !== Id;
    });

    this.setState({
      dataLists
    });
  };

  //To handle the data Update
  handleUpdate = (e, id) => {
    const index = this.state.dataLists.findIndex(data => {
      return data.id === id;
    });
    const data = Object.assign({}, this.state.dataLists[index]);
    this.setState({
      id: data.id,
      title: data.title,
      body: data.body,
      schedule: data.schedule
    });
  };

  //To save the updated data
  saveUpdate = (e, id) => {
    const newData = this.state.dataLists.map(data => {
      if (data.id === id) {
        return {
          title: this.state.title,
          body: this.state.body,
          schedule: this.state.schedule
        };
      }
      return data;
    });
    this.setState(
      {
        dataLists: newData,
        isEditing: false
      },
      () => {
        this.reset();
      }
    );
  };

  render() {
    const {
      dataLists,
      id,
      title,
      body,
      schedule,
      isEditing
    } = this.state;
    return (
      <Grid container spacing={0}>
        <Grid item ls={6} md={6} sm={12} xs={12}>
          <CreateData
            id={id}
            title={title}
            body={body}
            schedule={schedule}
            addData={this.addData}
            handleChange={this.handleChange}
            handleDateChange={this.handleDateChange}
            saveUpdate={this.saveUpdate}
            isEditing={isEditing}
          />
        </Grid>
        <Grid item ls={6} md={6} sm={12} xs={12}>
          <DataLists
            lists={dataLists}
            removeData={this.removeData}
            handleUpdate={this.handleUpdate}
          />
        </Grid>
      </Grid>
    );
  }
}

export default Crud;
