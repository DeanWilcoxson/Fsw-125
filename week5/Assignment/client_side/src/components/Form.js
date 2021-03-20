import React, { useState } from "react";
export default function Form(props) {
  const initInputs = {
    firstName: "",
    lastName: "",
    type: "",
    living: false,
    bountyAmt: 0,
  };
  const [inputs, setInputs] = useState(initInputs);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  }
  function handleSubmit() {
    props.addBounty(inputs);
    setInputs(initInputs);
  }
  return (
    <form id="form" name="form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        id="firstName"
        value={inputs.firstName}
        placeholder="First Name"
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="lastName"
        id="lastName"
        value={inputs.lastName}
        placeholder="Last Name"
        onChange={handleChange}
      ></input>
      <select name="type" id="type" onChange={handleChange} >
        <option name="none" className="type" value="Unknown">
          Affiliation
        </option>
        <option name="jedi" className="type" value="Jedi">
          Jedi
        </option>
        <option name="sith" className="type" value="Sith">
          Sith
        </option>
      </select>
      <select
        name="living"
        id="living"
        onChange={handleChange}
        value={inputs.living}
      >
        <option name="living" className="living" value="Unknown">
          Living
        </option>
        <option name="living" className="living" value="Alive">
          Yes
        </option>
        <option name="living" className="living" value="Deceased">
          No
        </option>
      </select>
      <input
        type="number"
        name="bountyAmt"
        id="bountyAmt"
        value={inputs.bountyAmt}
        placeholder="Amount held for payment"
        onChange={handleChange}
      ></input>
      <button id="subBtn">Submit</button>
    </form>
  );
}
