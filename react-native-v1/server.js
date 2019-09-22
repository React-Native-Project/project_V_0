const express = require("express");
const cors = require("cors");

const app = express();


app.use(express.json());
app.use(cors());


app.use("/test", require("./Server/test"));



const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server listening to ${PORT}`)); 
