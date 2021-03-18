import React, { Component } from "react";
export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      living: false,
      bountyAmt: 0,
      type: "",
      id: "uuidv4()"
    };
  }
  handleSubmit = () => {};
  handleChange = () => {};
  render() {
    return (
      <form id="form" name="form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="First Name"
          onChange={this.handleChange}
        ></input>
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Last Name"
          onChange={this.handleChange}
        ></input>{" "}
        <select name="type" id="type" onChange={this.handleChange}>
          <option name="none" className="type" value="unknown">
            Affiliation
          </option>
          <option name="jedi" className="type" value="jedi">
            Jedi
          </option>
          <option name="sith" className="type" value="sith">
            Sith
          </option>
        </select>
        <select name="alive" id="living" onChange={this.handleChange}>
          <option name="isAlive" className="living" value="unknown">
            Living
          </option>
          <option name="living" className="living" value="yes">
            Yes
          </option>
          <option name="notAlive" className="living" value="No">
            No
          </option>
        </select>
        <input
          type="number"
          name="bountyAmt"
          id="bountyAmt"
          placeholder="Amount held for payment"
          onChange={this.handleChange}
        ></input>
        <button>Submit</button>
      </form>
    );
  }
}
