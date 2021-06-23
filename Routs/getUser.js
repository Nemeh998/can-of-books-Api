// send data to front end 
const  User = require('../models/User');

function getUser(req,res){
    // response to make sure the send data
const {email}=req.query;
    console.log(email);
    User.find({ email:email },(err,user) => {

if(err)
{ 
    res.send('didnt Work!!!');
console.error(errn,"ccc");
}

else
{
res.json(user[0]);

// res.send('Work');
// console.log(user[0].books);
}
//http://localhost:8080/book?email=nemh998@gmail.com

});
}

module.exports=getUser;