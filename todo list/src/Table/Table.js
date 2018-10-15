import React, { Component } from "react";
import { Panel, ControlLabel, Glyphicon } from "react-bootstrap";
import "./Table.css";
import { Link } from "react-router-dom";
import moment from "moment";
import request from "request";
import axios from "axios";

const API = "https://api-masood.herokuapp.com/myList";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      profile: []
    };
  }

  componentWillMount() {
    this.setState({ profile: {} });
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
        console.log(profile.sub);
        axios
          .get(API, { params: { createdBy: profile.sub } })
          .then(response => console.log(response))
          .then(response => response.json())
          .then(data => this.setState({ games: data }));
      });
    } else {
      this.setState({ profile: userProfile });
    }
  }

  componentDidMount() {
    console.log("In DID MOUNT");
  }

  render() {
    // handleUser(this.state.profile.sub);
    const { profile } = this.state;
    const { games } = this.state;
    const { isAuthenticated } = this.props.auth;
    console.log(this.state);
    return (
      <div className="container">
        {isAuthenticated() && (
          <div>
            <h4>Welcome to Strongest Table!</h4>
            <h1>{profile.name}</h1>
            <h1>{profile.sub}</h1>
            <ul>
              {games.map(hit => (
                <li key={hit._id}>
                  <h1>
                    <a href={hit.title}>{hit.title}</a>
                  </h1>
                  <h3>{hit.description}</h3>
                  <h4 style={{ color: "red" }}>
                    {moment(hit.deadline).format("Do MM YYYY")}
                  </h4>
                  <p>{hit.createdBy}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
        {!isAuthenticated() && <h4>You can't see my Table, Please Log in!</h4>}
      </div>
    );
  }
}

export default Table;
