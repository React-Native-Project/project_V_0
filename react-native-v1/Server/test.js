const express = require("express");
const router = express.Router();
const mongo = require("../Database/test");

//write your code here

router.post("/:firstName/:phone", (req, res) => {
  console.log("test server")
    let firstName=req.params.firstName;
    let phone=req.params.phone;
  mongo.kidsTest(firstName,phone, result => {
    res.json(result);
  });
});

module.exports = router;
