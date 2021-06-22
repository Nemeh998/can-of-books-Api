'use strict';

const cors =require ('cors');
const express =require('express');
require('dotenv').config();
const app =express();
app.use(cors());
// this method use to requst our decode budy sent by post or put method
app.use(express.json());
const port = process.env.PORT|| 8081;
// get the function ,to use method from usre.controller
const {  creatBookHandler,getBooks,deleteBooks }=require('./controller/User.controller');



app.get('/',homePage);
function homePage(req,res){

    res.send('All is good!');
}

const getUser=require('./models/User');
app.get('/book',getUser);


//ROUTES//
// read Router to get the info for the book
app.get('/getbooks', getBooks);
//create route,which will send new book to be added for the user
app.post('/postBooks', creatBookHandler);
app.delete('/deleteBook/:index', deleteBooks);


app.listen(port, () => {
    console.log(`server starrted on ${port}`)
});
