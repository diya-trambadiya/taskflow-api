const express = require("express");
const app = express();

app.use(express.json());

let tasks = [
  {
    id: 1,
    title: "Complete OST practical",
    status: "pending",
    priority: "high"
  }
];

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/tasks", (req, res) => {
  const newTask = req.body;
  tasks.push(newTask);
  res.json({ message: "Task added successfully" });
});

app.put("/tasks/:id", (req, res) => {
  res.json({ message: "Task updated successfully" });
});

app.delete("/tasks/:id", (req, res) => {
  res.json({ message: "Task deleted successfully" });
});

app.listen(3000, () => {
  console.log("TaskFlow API running on port 3000");
});