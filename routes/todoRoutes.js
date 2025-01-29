const express = require("express");
const Todo = require("../models/Todo"); //Importing Model..
const { getTodos , updateTodo , createTodo , deleteTodo } = require('../controllers/todoControllers');

const router = express.Router(); // router instance...

// Getting all tasks...

router.get('/', getTodos)

// add new task in todo..

router.post('/', createTodo);

// update task (done or undo)

router.put('/:id', updateTodo);

//Deleting a Task...

router.delete("/:id", deleteTodo)

module.exports = router