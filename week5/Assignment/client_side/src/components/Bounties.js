import React, { useEffect } from "react";
import Bounty from "./Bounty";
export default function Bounties(props) {
  
 const{bounties, getBounties, delBounty} = props

  useEffect(() => {
    getBounties();
  });

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
              delBounty={delBounty}
            />
          </div>
        );
      })}
    </div>
  );
}
