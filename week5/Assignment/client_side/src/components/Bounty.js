import React from "react";
export default function Bounty(props) {
  return (
    <div>
      <p>
        {props.firstName} {props.lastName} : {props.type} : ${props.bountyAmt}{" "}
        Alive?:
        {props.living ? "Yes" : "No"}
      </p>
    </div>
  );
}
