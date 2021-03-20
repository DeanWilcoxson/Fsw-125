const { Router } = require("express");
const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
let bounties = [
  {
    firstName: "Darth",
    lastName: "Maul",
    living: true,
    bountyAmt: 10000000,
    type: "Sith",
    id: uuidv4(),
  },
  {
    firstName: "Darth",
    lastName: "Vader",
    living: true,
    bountyAmt: 15000000,
    type: "Sith",
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
router.get("/", (req, res) => {
  res.send(bounties);
});
router.get("/:bountyId", (req, res) => {
  const bountyId = req.params.bountyId;
  const getBounty = bounties.find((bounty) => bounty.id === bountyId);
  res.send(getBounty);
});
router.post("/", (req, res) => {
  const newBounty = req.body;
  newBounty.id = uuidv4();
  bounties.push(newBounty);
  res.send(newBounty);
});
router.delete("/:bountyId", (req, res) => {
  const bountyId = req.params.bountyId;
  const bountyIndex = bounties.findIndex((bounty) => bounty.id === bountyId);
  bounties.splice(bountyIndex, 1);
  res.send("Bounty Deleted");
});
router.put("/:bountyId", (req, res) => {
  const bountyId = req.params.bountyId;
  const bountyIndex = bounties.findIndex((bounty) => bounty.id === bountyId);
  const updateObject = req.body;
  const updateBounty = Object.assign(bounties[bountyIndex], updateObject);
  res.send(updateBounty);
});
module.exports = router;
