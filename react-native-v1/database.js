const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/kids", { useNewUrlParser: true });

const db = mongoose.connection;

db.on("error", function() {
  console.log("mongoose connection error");
  console.log("____________________________");
});

db.once("open", function() {
  console.log("mongoose connected successfully");
  console.log("____________________________");
});

let KidsSchema = new mongoose.Schema({
  number1: Number,
  number2: Number,
  operator: String,
  answer: Number
});

let KidsSchema2 = new mongoose.Schema({
  number1: Number,
  number2: Number,
  operator: String,
  answer: Number
});

let KidsSchema3 = new mongoose.Schema({
  number1: Number,
  number2: Number,
  answer: String
});

let kids = mongoose.model("kids", KidsSchema);
let kids2 = mongoose.model("kids2", KidsSchema2);
let kids3 = mongoose.model("kids3", KidsSchema3);

module.exports = {
  kids,
  kids2,
  kids3
};
