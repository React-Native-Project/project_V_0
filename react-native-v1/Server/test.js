const express = require("express");
const router = express.Router();
const mongo = require("../Database/test");

//write your code here

router.post("/:number1/:number2/:operator/:answer", (req, res) => {
  console.log("test post server")
    let number1=req.params.number1;
    let number2=req.params.number2;
    let operator=req.params.operator;
    let answer=req.params.answer;
  mongo.kidsPost(number1,number2,operator,answer, result => {
    res.json(result);
  });
});

router.get("/", (req, res) => {
  console.log("test get server")
  mongo.kidsGet(result => {
    res.json(result);
  });
});

module.exports = router;
