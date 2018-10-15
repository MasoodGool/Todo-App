import React, { Component } from "react";
import "../App.css";
import axios from "axios";
import moment from "moment";

class Submit extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.setState({ profile: {} });
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
      });
    } else {
      this.setState({ profile: userProfile });
    }
  }

  handleChange = event => {
    console.log(event.target.value);
    this.text = event.target.value;
    this.setState({ [event.target.name]: this.text });
    console.log(this.state);
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    this.setState({ [event.target.name]: event.target.value });
    const { title, description, deadline, profile } = this.state;
    console.log(profile.sub);
    const newTask = {
      title: title,
      description: description,
      deadline: deadline,
      createdBy: profile.nickname,
      user_Id: profile.sub
    };

    console.log(profile.nickname);

    axios
      .post("https://api-masood.herokuapp.com/", newTask)
      .then(response => this.setState({ message: response.data.message }))
      .catch(error => this.setState({ message: error.message }));
  };

  render() {
    const { profile } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="title">{profile.name} Please enter title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={this.handleChange}
        />
        <label htmlFor="title">Enter description</label>
        <input
          id="description"
          name="description"
          type="text"
          onChange={this.handleChange}
        />
        <label htmlFor="title">Enter deadline</label>
        <input
          id="deadline"
          name="deadline"
          type="date"
          onChange={this.handleChange}
        />
        <button onChange={this.handleSubmit}>Send data!</button>
      </form>
    );
  }
}

export default Submit;
