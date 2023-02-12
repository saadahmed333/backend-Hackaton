const express = require('express');
const mongoose = require("mongoose");
// const parse = require('body-parser')
const cors = require('cors')
const app = express();
app.use(cors());
app.use(express.json())

// var corsOptions = {
  //   origin: "http://localhost:8081"
  // }
  
  // app.use(cors(corsOptions));
// app.use(parse.json());
mongoose
.connect("mongodb+srv://saad:saad@cluster0.io7ziqi.mongodb.net/?retryWrites=true&w=majority")
.then(() => console.log("Connected!"))
.catch((err) => console.log("errr===>", err));



app.use("/user", require("./users"));
app.use("/adminUser", require("./adminUser"));


const PORT = 3002;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

