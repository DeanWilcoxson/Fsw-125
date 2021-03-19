import React, { useState, useEffect } from "react";
import axios from "axios";
import Bounty from "./Bounty";
export default function Bounties() {
  const [bounties, setBounties] = useState([]);
  function getBounties() {
    axios
      .get("/bounties")
      .then((res) => setBounties(res.data))
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getBounties();
  }, []);

  return (
    <div>
      {bounties.map((x) => {
        return (
          <div key={x.id}>
            <Bounty
              firstName={x.firstName}
              lastName={x.lastName}
              type={x.type}
              bountyAmt={x.bountyAmt}
              living={x.living}
            />
          </div>
        );
      })}
    </div>
  );
}
