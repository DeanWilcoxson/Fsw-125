const express = require("express");
const gameRouter = express.Router();
const { v4: uuidv4 } = require("uuid");
let games = [
  { title: "Street Fighter 5", genre: "Fighting", id: uuidv4() },
  { title: "Dragon Ball FighterZ", genre: "Fighting", id: uuidv4() },
  { title: "Final Fantasy 7", genre: "Adventure", id: uuidv4() },
];

gameRouter.get("/", (req, res) => {
  res.send(games);
});

gameRouter.get("/:gameId", (req, res) => {
  const gameId = req.params.gameId;
  const getGame = games.find((game) => game.id === gameId);
  res.send(getGame);
});

gameRouter.get("/search/genre", (req, res) => {
  const genre = req.query.genre;
  const foundGames = games.filter((game) => game.genre === genre);
  res.send(foundGames);
});

gameRouter.post("/", (req, res) => {
  const newGame = req.body;
  newGame.id = uuidv4();
  games.push(newGame);
  res.send(`New object ${req.body.title} added to the database.`);
});

gameRouter.delete("/:gameId", (req, res) => {
  const gameId = req.params.gameId;
  const gameIndex = games.findIndex((game) => game.id === gameId);
  games.splice(gameIndex, 1);
  res.send("Item Deleted");
});
gameRouter.put("/:gameId", (req, res) => {
  const gameId = req.params.gameId;
  const gameIndex = games.findIndex((game) => game.id === gameId);
  const updateObject = req.body;
  const updateGame = Object.assign(games[gameIndex], updateObject);
  res.send(updateGame);
});

module.exports = gameRouter;
