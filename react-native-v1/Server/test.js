const express = require("express");
const router = express.Router();
const mongo = require("../Database/test");

//write your code here

router.post("/", (req, res) => {
  // console.log("test post server, abd")
  // let number1 = req.params.number1;
  // let number2 = req.params.number2;
  // let operator = req.params.operator;
  // let answer = req.params.answer;
  let kidsObject=req.body;
  mongo.kidsPost(kidsObject, result => {
    res.json(result);
  });
});

router.get("/", (req, res) => {
  console.log("test get server")
  mongo.kidsGet(result => {
    res.json(result);
  });
});



router.post("/kids2", (req, res) => {
  let kids2Object=req.body;
  mongo.kids2Post(kids2Object, result => {
    res.json(result);
  });
});

//kids2
router.get("/kids2", (req, res) => {
  mongo.kidsGet2(result => {
    res.json(result);
  });
});



router.post("/kids3", (req, res) => {
  let kids3Object = req.body
  mongo.kids3Post(kids3Object, result => {
    res.json(result);
  });
});

//kids3
router.get("/kids3", (req, res) => {
  mongo.kidsGet3(result => {
    res.json(result);
  });
});


module.exports = router;
