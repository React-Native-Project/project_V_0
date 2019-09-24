const db = require("../database");
let kids = db.kids;

//write your code here


let kidsPost = (number1,number2,operator,answer, cb) => {
 console.log("post test")
  kids.create({number1:number1,number2:number2,operator:operator,answer:answer}, (err, data) => {
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

module.exports = {
    kidsPost,
    kidsGet
};