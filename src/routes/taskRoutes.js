const express = require("express");
const {
  createTask,
  getTask,
  putTask,
  deleteTask,
} = require("../controllers/taskController");

const router = express.Router();

router.post("/", createTask);

router.get("/:taskID", getTask);

router.put("/:taskID", putTask);

router.delete("/:taskID", deleteTask);

module.exports = router;
