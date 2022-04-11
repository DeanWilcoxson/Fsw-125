import axios from "axios";
import React, { useState } from "react";
import Bounties from "./Components/Bounties";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
import "./Styles.css";

export default function App() {
  const [bounties, setBounties] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  // console.log(searchKeyword);
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
    console.log(bountyId);
    axios
      .delete(`http://localhost:8000/bounties/${bountyId}`)
      .then((res) => {
        setBounties((prevBounties) =>
          prevBounties.filter((bounty) => bounty.id === bountyId)
        );
      })
      .catch((err) => console.log(err));
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
      <h1 id="header">The Bounty Hunter</h1>
      <hr />
      <Form addBounty={addBounty} />
      <div className="SearchBox">
        <input
          id="searchBar"
          type="text"
          placeholder="Search by type"
          onChange={(e) => {
            setSearchKeyword(e.target.value);
          }}
        ></input>
      </div>

      <Bounties
        bounties={bounties}
        getBounties={getBounties}
        delBounty={delBounty}
        editBounty={editBounty}
        searchKeyword={searchKeyword}
      />
      <Footer />
    </div>
  );
}
