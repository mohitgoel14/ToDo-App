// mongodb+srv://mohitgoel14:<password>@mohitgoel14.zwztqb4.mongodb.net/
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://<userid>:<password>@sample.zwztqb4.mongodb.net/"
);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model('todos', todoSchema);
module.exports = {
  todo,
};
