import React, { Component } from "react";
import Bounties from "./components/Bounties";
import Form from "./components/Form";
import "./Styles.css";

export default class App extends Component {
  render() {
    return (
      <div id="appDiv">
        <h1 id="header">Bounty Hunter HQ</h1>
        <hr />
        <Form />
        <Bounties/>
      </div>
    );
  }
}
