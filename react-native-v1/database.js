const mongoose = require('mongoose');
 mongoose.connect('mongodb://localhost/kids', { useNewUrlParser: true });
//mongoose.connect('mongodb+srv://naaman:tBZNfUHaMrj8JWAM@cluster0-xcjyv.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', function () {
  console.log('mongoose connection error');
  console.log('____________________________')
});

db.once('open', function () {
  console.log('mongoose connected successfully');
  console.log('____________________________')
});


let KidsSchema = new mongoose.Schema({
  number1:Number,
  number2:Number,
  operator:String,
  answer: Number,
});

let kids = mongoose.model('kids', KidsSchema);



module.exports = {
  kids
}




