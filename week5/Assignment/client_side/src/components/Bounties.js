import React, { useState, useEffect } from "react";
import axios from "axios";
import Bounty from "./Bounty";
export default function Bounties() {
  const [bounties, setBounties] = useState([]);
  useEffect(() => {
    axios
      .get("/bounties")
      .then((res) => setBounties(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {bounties.map((x) => {
        console.log(x);
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
