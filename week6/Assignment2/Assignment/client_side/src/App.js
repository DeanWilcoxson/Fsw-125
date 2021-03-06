import axios from "axios";
import React, { useState } from "react";
import Bounties from "./components/Bounties";
import Form from "./components/Form";
import "./Styles.css";

export default function App() {
  const [bounties, setBounties] = useState([]);
  function getBounties() {
    axios
      .get("http://localhost:8000/bounties")
      .then((res) => setBounties(res.data))
      .catch((err) => console.log(err));
  }
  function addBounty(newBounty) {
    axios
      .post("http://localhost:8000/bounties", newBounty)
      .then((res) => setBounties((prevBounties) => [...prevBounties, res.data]))
      .catch((err) => console.log(err));
  }
  function delBounty(bountyId) {
    console.log(bountyId)
    axios
      .delete(`http://localhost:8000/bounties/${bountyId}`)
      .then((res) => {
        setBounties((prevBounties) =>
          prevBounties.filter((bounty) => bounty.id === bountyId)
        );
      })
      .catch((err) => console.lof(err));
  }
  function editBounty(updates, bountyId) {
    console.log(updates, bountyId);
    axios
      .put(`http://localhost:8000/bounties/${bountyId}`, updates)
      .then((res) =>
        setBounties((prevBounties) =>
          prevBounties.map((bounty) =>
            bounty.id !== bountyId ? bounty : res.data
          )
        )
      )
      .catch((err) => console.log(err));
  }
  return (
    <div id="appDiv">
      <h1 id="header">Bounty Hunter HQ</h1>
      <hr />
      <Form addBounty={addBounty} />
      <Bounties
        bounties={bounties}
        getBounties={getBounties}
        delBounty={delBounty}
        editBounty={editBounty}
      />
    </div>
  );
}
