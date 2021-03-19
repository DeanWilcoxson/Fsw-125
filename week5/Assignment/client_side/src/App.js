import axios from "axios";
import React from "react";
import Bounties from "./components/Bounties";
import Form from "./components/Form";
import "./Styles.css";

export default function App() {
function addBounty(newBounty){
  axios.post("/bounties", newBounty)
  .then(res => console.log(res))
  .catch(err => console.log(err))
}

  return (
    <div id="appDiv">
      <h1 id="header">Bounty Hunter HQ</h1>
      <hr />
      <Form addBounty={addBounty}/>
      <Bounties />
    </div>
  );
}
