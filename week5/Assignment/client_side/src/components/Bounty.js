import React, { useState } from "react";
import Form from "./Form";
export default function Bounty(props) {
  const {
    firstName,
    lastName,
    type,
    living,
    id,
    bountyAmt,
    delBounty,
    editBounty,
  } = props;
  const [editToggle, setEditToggle] = useState(false);
  return (
    <div className="bounty">
      {!editToggle ? (
        <>
          <h1 className="bountyName">
            Name: {firstName} {lastName}
          </h1>
          <p className="bountyStatus">
            Affiliation: {type} : {living ? "Alive" : "Deceased"}
          </p>
          <p className="bountyAmt">Bounty: ${bountyAmt}</p>
          <button className="delBtn" onClick={delBounty}>
            Delete
          </button>
          <button
            className="editBtn"
            onClick={() => {
              setEditToggle((prevToggle) => !prevToggle);
            }}
          >
            Edit
          </button>
        </>
      ) : (
        <>
          <Form
            firstName={firstName}
            lastName={lastName}
            type={type}
            living={living}
            bountyAmt={bountyAmt}
            id={id}
            addBounty={editBounty}
          />
          <button
            className="closeEditBtn"
            onClick={() => {
              setEditToggle((prevToggle) => !prevToggle);
            }}
          >
            Close
          </button>
        </>
      )}
    </div>
  );
}
