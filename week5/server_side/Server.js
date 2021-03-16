const express = require("express")
const app = express();
const router = require('./Routes/Router')

app.use(express.json());
app.use("/", router)
app.listen( 9000, () => {
    console.log("Server is running on LocalHost:9000")
} )
