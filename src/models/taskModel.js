const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    isCompleted: { type: Boolean, required: true },
  },
  { collection: "tasklist" }
);

taskSchema.pre("save", function (next) {
  if (!this.isCompleted) {
    this.isCompleted = false;
  }
  next();
});

const Task = mongoose.model("tasklist", taskSchema);

module.exports = Task;
