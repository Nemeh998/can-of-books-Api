'use strict';

const cors =require ('cors');
const express =require('express');
require('dotenv').config();
const app =express();
app.use(cors());
// this method use to requst our decode budy sent by post or put method
app.use(express.json());
const port = process.env.PORT|| 8081;

// const  User = require('./models/User');

// get the function ,to use method from usre.controller




app.get('/',homePage);
function homePage(req,res){

    res.send('All is good!');
}
// // read Router to get the info for the book
const getUser=require('./Routs/getUser');
app.get('/book',getUser);


// const {  creatBookHandler,getBooks,deleteBooks }=require('./controller/User.controller');
// //ROUTES//
// //create route,which will send new book to be added for the user
const creatBookHandler=require('./Routs/createBook');
app.post('/postBooks', creatBookHandler);

const deleteBooks=require('./Routs/deleteBook');
app.delete('/deleteBook/:index', deleteBooks);


app.listen(port, () => {
    console.log(`server starrted on ${port}`)
});
