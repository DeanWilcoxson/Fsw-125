const express = require("express");
const app = express();

const users = [
  { name: "Dean Wilcoxson", age: 29 },
  { name: "Darrel Wilson", age: 32 },
  { name: "Dan Wilco", age: 31 },
  { name: "Deanna Wilcox", age: 27 },
  { name: "Gene Coxon", age: 28 },
];
 
const about ='Super Awesome About Page';

const home = "HomePage"

app.get("/", (req, res) => {
  res.send(home);
});

app.get("/about", (req, res) => {
  res.send(about);
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.listen(5000, () => {
  console.log("The Server is Running on Port 5000.");
});
