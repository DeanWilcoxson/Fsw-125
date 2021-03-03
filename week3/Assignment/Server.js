const express = require("express");
const app = express();
app.use(express.json());


const id = require("uuid/v5");

let bounties = [
  {
    firstName: "Darth",
    lastName: "Maul",
    living: true,
    bountyAmt: 10000000,
    type: "sith",
    id: id(),
  },
  {
    firstName: "Darth",
    lastName: "Vader",
    living: true,
    bountyAmt: 15000000,
    type: "sith",
    id: id(),
  },
  {
    firstName: "Darth",
    lastName: "Sidious",
    living: true,
    bountyAmt: 20000000,
    type: "Sith",
    id: id(),
  },
];

app.get("/",(req, res) => {
    res.send(bounties)
})
app.listen( 9000, () => {
    console.log("Server is running on LocalHost:9000")
} )