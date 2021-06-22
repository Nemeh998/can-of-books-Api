
const { userModel } = require('../models/User');
///////////////////////////////////////////////////
// (1)POST
//(2)http://localhost:8080/postBooks
//(3)body
//(4)json
//(5)app.use(express.json());
///////////////////////////////////////////////////
function creatBookHandler(req, res) {

    console.log(res.body, "req for body");
    //,  imageUrl
    const { name, description, status, email } = req.body;

    res.send('All good');

    userModel.find({ email: email }, (error, userModel) => {
        if (error) {
            res.send('provide correct data')
        }
        else {
            //add new book 

            userModel.books.push({
                name: name,
                discription: description
                // ,
                // imge: email,
            });

            userModel.save();

            res.send(userModel.books);

        }


    })

}





function getBooks(req, res) {
    let userEmail = req.query.email;
    console.log(req.query.email);
    // let {name} = req.query
    userModel.find({ email: userEmail }, function (err, userModel) {
        if (err) {
            return console.log('did not work');
        } else {
            res.send(userModel.books)
        }
    })
}

function deleteBooks(req, res) {
    const { email } = req.query;

    const index = Number(req.params.index)

    userModel.find({ email: email }, (error, userModel) => {
        const newBookArr = userModel.books.filter((book, idx) => {
            if (idx !== index) {
                return book;
            }
        })
        userModel.books = newBookArr;
        userModel.save();
        res.send(userModel.books);
    })
}




module.exports = {
    getBooks,
    creatBookHandler,
    deleteBooks
};