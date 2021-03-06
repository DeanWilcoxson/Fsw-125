const express = require("express");
const cors = require("cors")
const app = express();
const router = require("./Routes/Router");
app.use(express.json());
app.use(cors())
app.use("/bounties", router);
app.listen(8000, () => {
  console.log("Server is running on LocalHost:8000");
});
