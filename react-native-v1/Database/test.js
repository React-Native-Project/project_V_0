const db = require("../database");
let kids = db.kids;
let kids2 = db.kids2;
let kids3 = db.kids3;

//write your code here


let kidsPost = (number1, number2, operator, answer, cb) => {
  console.log("post test")
  kids.create({ number1: number1, number2: number2, operator: operator, answer: answer }, (err, data) => {
    if (err) {
      cb(err);
    } else {
      cb(data);
    }
  });
};

let kidsGet = (cb) => {
  console.log("get test")
  kids.find({}, (err, data) => {
    if (err) {
      cb(err);
    } else {
      cb(data);
    }
  });
};

//kids2
let kidsGet2 = (cb) => {
  console.log("get test")
  kids2.find({}, (err, data) => {
    if (err) {
      cb(err);
    } else {
      cb(data);
    }
  });
};

//kids3
let kidsGet3 = (cb) => {
  console.log("get test")
  kids3.find({}, (err, data) => {
    if (err) {
      cb(err);
    } else {
      cb(data);
    }
  });
};

module.exports = {
  kidsPost,
  kidsGet,
  kidsGet2,
  kidsGet3
};