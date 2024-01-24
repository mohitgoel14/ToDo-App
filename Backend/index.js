const express = require("express");
const cors = require("cors");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

app.post("/todos", async function (req, res) {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);

  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
  
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });
  res.json({
    msg: "Todo is created",
  });
});

app.get("/todos", async function (req, res) {
  const todos = await todo.find({});
  res.json({
    todos,
  });
});

app.put("/completed", async function (req, res) {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
  const existingTodo = await todo.findOne({ _id: req.body.id });
  const updatedCompleted = !existingTodo.completed;
  await todo.updateOne(
    {
      _id: req.body.id,
    },
    {
      $set: {
        completed: updatedCompleted,
      },
    }
  );

  res.json({
    msg: "Todo marked as completed",
  });
});

app.put("/delete", async function (req, res) {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);
  if (!parsedPayload.success) {
    res.status(411).json({
      msg: "You sent the wrong inputs",
    });
    return;
  }
  await todo.deleteOne(
    {
      _id: req.body.id,
    }
  );

  res.json({
    msg: "Todo Deleted",
  });
});
app.listen(port);
