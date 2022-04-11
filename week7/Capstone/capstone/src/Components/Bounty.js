import React, { useState } from "react";
import Form from "./Form";
export default function Bounty(props) {
  const {
    firstName,
    lastName,
    type,
    living,
    forcePowers,
    id,
    bountyAmt,
    delBounty,
    editBounty,
  } = props;
  const [editToggle, setEditToggle] = useState(false);
  return (
    <div className="bountyGrid">
      <div className="bounty">
        {!editToggle ? (
          <div key={id}>
            <h1 className="bountyName">
              Name: {firstName} {lastName}
            </h1>
            <p className="bountyStatus">
              Affiliation: {type} : {living ? "Alive" : "Deceased"}
            </p>
            <div className="forcePowers">
              Force Powers:
              <ul className="powersList">
                {forcePowers.map((x) => {
                  return (
                    <li className="power" key={forcePowers.indexOf(x)}>
                      {x}
                    </li>
                  );
                })}
              </ul>
            </div>
            <p className="bountyAmt">Bounty: ${bountyAmt}</p>
            <button className="delBtn" onClick={() => delBounty(id)}>
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
          </div>
        ) : (
          <div>
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
          </div>
        )}
      </div>
    </div>
  );
}
