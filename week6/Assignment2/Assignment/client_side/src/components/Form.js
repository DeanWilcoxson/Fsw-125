import React, { useState } from "react";
export default function Form(props) {
  const initInputs = {
    firstName: props.firstName || "",
    lastName: props.lastName || "",
    type: props.type || "",
    living: props.living || false,
    bountyAmt: props.bountyAmt || 0,
  };
  const [inputs, setInputs] = useState(initInputs);
  function handleDropDown(e) {
    e.target.value === "true"
      ? setInputs((prevInputs) => ({ ...prevInputs, living: true }))
      : setInputs((prevInputs) => ({ ...prevInputs, living: false }));
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  }
  function handleSubmit(e) {
    console.log(inputs, props.id);
    props.addBounty(inputs, props.id);
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
      <select name="type" id="type" onChange={handleChange}>
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
        onChange={handleDropDown}
        value={inputs.living.value}
      >
        <option name="living" className="living">
          Living
        </option>
        <option name="living" className="living" value={"true"}>
          Yes
        </option>
        <option name="living" className="living" value={"false"}>
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
