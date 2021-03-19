import React, { useState, useEffect } from "react";
import axios from "axios";
export default function Bounties() {
  const [bounties, setBounties] = useState([]);
  console.log(bounties)
  useEffect(() => {
    axios
      .get("/")
      .then((res) => setBounties(res.data))
      .catch((error) => console.log(error));
  },[]);
  return (
    <div>
      {/* bounties.map((x) => {
        return <div></div>;
      }) */}
    </div>
  );
}
