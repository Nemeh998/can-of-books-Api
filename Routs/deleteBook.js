/////////////////////////////////////
//DELETE
// Query
// email  vlaue
//http://localhost:8080/deleteBook/3?email=nemh998@gmail.com
/////////////////////////////////////

const  User = require("../models/User");


function deleteBooks(req, res) {
  const index = Number(req.params.index);

  const { email } = req.query;

   User.find({ email: email }, (err, userData) => {
    const newBooksArr = userData[0].books.filter((book, idx) => {
      return idx !== index;
    });
    userData[0].books = newBooksArr;
    userData[0].save();
    res.send(" book deleted");
  });
}

module.exports= deleteBooks;