const  User = require("../models/User");
const express = require("express");
const app = express();
app.use(express.json());

///////////////////////////////////////////////////
// (1)POST
//(2)http://localhost:8080/postBooks
//(3)body
//(4)json
//(5)app.use(express.json());
///////////////////////////////////////////////////
function creatBookHandler(req, res) {
  const { name, email, description } = req.body;
  console.log(req.body);
   User.find({ email: email }, (error, userData) => {
    console.log(userData);
    userData[0].books.push({
      name: name,
      description: description,
    });
    userData[0].save();
    res.send(userData[0].books);
  });
}

module.exports = creatBookHandler;