const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(express.json());
app.use(morgan("dev"));
app.use("/games", require("./routes/gameRouter"));

app.use((err, req, res, next) => {
  console.log(err);
});

app.listen(9000, () => {
  console.log("Running on localhost:9000");
});
