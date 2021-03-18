import React, { useState, useEffect } from "react";
import axios from "axios";
import Bounty from "./Bounty";
export default function Bounties() {
  const [bounties, setBounties] = useState([]);
  useEffect(() => {
    axios
      .get("/bounties")
      .then((res) => {
        setBounties(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      {bounties.map((x) => {
        return (
          <Bounty
            firstName={x.firstName}
            lastName={x.lastName}
            living={x.living}
            type={x.type}
            bountyAmount={x.bountyAmount}
            key={x.bountyId}
          />
        );
      })}
    </div>
  );
}
