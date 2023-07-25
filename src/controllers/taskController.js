const Task = require("../models/taskModel");
const db = require("../db");
require("dotenv").config();

const createTask = async (req, res) => {
  try {
    const { name, description } = req.body;
    var newTask = new Task({
      name,
      description,
    });
    const savedTask = await new Task.save(newTask);
  } catch (error) {
    console.error("Error creating Task:", error);
    res.status(400).json({ error: "Error creating Task" });
  }
};

const getTask = async (req, res) => {
  try {
    const id = req.params.id;
    const task = await Task.findById({ _id: id });
    if (!task) {
      res.status(404).json({ error: "task not found" });
    } else {
      console.log("successfully obtaining the task");
      res.status(200).json({
        Message: "This is your task info",
        task: task,
      });
    }
  } catch (error) {
    console.error("Error getting task:", error);
    res.status(400).json({ error: "Error getting task" });
  }
};

const putTask = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, description } = req.body;
    var updatedTask = new Task({
      name,
      description,
    });
    const saveUpdatedTask = await Task.findByIdAndUpdate(
      { _id: id },
      updatedTask,
      { new: true }
    );
    console.log("Succesfully task update");
    res.status(200).json({
      Message: "succesfully task update",
      Updated_task: updatedTask,
    });
  } catch (error) {
    console.error("error updating task", error);
    res.status(500).json({
      error: "error updating task",
    });
  }
};

const deleteTask = async (req, res) => {
  try {
    const id = req.params.id;
    const taskDeleted = await Task.findByIdAndDelete({
      _id: id,
    });
    console.log("Succesfully task delete");
    res.status(200).json({
      Message: "Succesfully task delete",
      Deleted_task: taskDeleted,
    });
  } catch (error) {
    console.error("error deleting task", error);
    res.status(500).json({
      error: "error deleting task",
    });
  }
};

module.exports = { createTask, getTask, putTask, deleteTask };
