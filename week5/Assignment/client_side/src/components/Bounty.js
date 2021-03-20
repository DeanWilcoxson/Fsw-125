import React from "react";
export default function Bounty(props) {
  const { firstName, lastName, type, living, bountyAmt, delBounty } = props;

  return (
    <div className="bounty">
      <h1 className="bountyName">
        Name: {firstName} {lastName}
      </h1>
      <p className="bountyStatus">
        Affiliation: {type} : {living ? "Alive" : "Deceased"}
      </p>
      <p className="bountyAmt">Bounty: ${bountyAmt}</p>
      <button className="delBtn" 
      onClick={delBounty}>
      Delete</button>
    </div>
  );
}
