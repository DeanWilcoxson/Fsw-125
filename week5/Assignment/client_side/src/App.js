import React from "react";
import Bounties from "./components/Bounties";
import Form from "./components/Form";
import "./Styles.css";

export default function App() {
  return (
    <div id="appDiv">
      <h1 id="header">Bounty Hunter HQ</h1>
      <hr />
      <Form />
      <Bounties />
    </div>
  );
}
