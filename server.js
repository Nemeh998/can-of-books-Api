'use strict';

const cors =require ('cors');
const express =require('express');
require('dotenv').config();
const app =express();
app.use(cors());
const port = process.env.PORT|| 8081;


app.listen(port, () => {
    console.log(`server starrted on ${port}`)
});
app.get('/',homePage);
function homePage(req,res){

    res.send('All is good!');
}

const getUser=require('./models/User');
app.get('/book',getUser);





