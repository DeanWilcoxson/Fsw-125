const express = require("express");
const app = express();
const bountyRouter = require('./routes/routes')

app.use(express.json());
app.use("/bounty", bountyRouter)
app.listen( 9000, () => {
    console.log("Server is running on LocalHost:9000")
} )
