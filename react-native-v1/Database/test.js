const db = require("../database");
let kids = db.kids;

//write your code here


let kidsTest = (firstName,phone, cb) => {
 console.log("first")
  kids.create({firstName:firstName,phone:phone}, (err, data) => {
    if (err) {
      cb(err);
    } else {
      cb(data);
    }
  });
};

module.exports = {
    kidsTest
};