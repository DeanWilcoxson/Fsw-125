const { Router } = require("express");
const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

let todos = [{ title: "Trash", description: "Take out the trash", completed: false, id: uuidv4() }];

router.get("/", (req, res) => {
  res.send(todos);
});

router.get("/:todoId", (req, res)=>{
  const todoId = req.params.todoId
  const getTodo = todos.find(todo => todo.id === todoId)
  res.send(getTodo)
})

router.post("/", (req, res) => {
  const newTodo = req.body;
  newTodo.id = uuidv4();
  todos.push(newTodo);
  res.send(`New object ${req.body.title} added to the database.`);
});

router.delete("/:todoId", (req, res) => {
  const todoId = req.params.todoId;
  const todoIndex = todos.findIndex((todo) => todo.id === todoId);
  todos.splice(todoIndex, 1);
  res.send("Item Deleted");
});

router.put("/:todoId", (req, res) => {
  const todoId = req.params.todoId;
  const todoIndex = todos.findIndex((todo) => todo.id === todoId);
  const updateObject = req.body;
  const updateTodo = Object.assign(todos[todoIndex], updateObject);
  res.send(updateTodo);
});

module.exports = router;
