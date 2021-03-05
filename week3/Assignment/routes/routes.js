const { Router } = require("express");
const express = require("express")
const router = express.Router()
const {v4: uuidv4} = require("uuid");

let bounties = [
  {
    firstName: "Darth",
    lastName: "Maul",
    living: true,
    bountyAmt: 10000000,
    type: "sith",
    id: uuidv4(),
  },
  {
    firstName: "Darth",
    lastName: "Vader",
    living: true,
    bountyAmt: 15000000,
    type: "sith",
    id: uuidv4(),
  },
  {
    firstName: "Darth",
    lastName: "Sidious",
    living: true,
    bountyAmt: 20000000,
    type: "Sith",
    id: uuidv4(),
  },
];

router.get("/",(req, res) => {
    res.send(bounties)
})

router.post('/', (req, res) => {
  const newBounty = req.body
  newBounty.id = uuidv4()
  bounties.push(newBounty)
  res.send(`New object ${req.body.firstName} ${req.body.lastName} added to the database.`)
})
module.exports = router;