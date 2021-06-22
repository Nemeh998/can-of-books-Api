// install mongoose
const { response } = require('express');

// mongodb://127.0.0.1:27017/books
// connicting  mongoose  whith localhost , our App connicted to express
// books name of data base 
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/mybook', {useNewUrlParser: true, useUnifiedTopology: true});
// create schema its tamplite to drow our model
const BookSchema = new  mongoose.Schema({
    name:String,
    description:String,
    status:String
});

const UserShhema = new  mongoose.Schema({
    email:String,
    books:[BookSchema]
   
    });
// take schema and bulid it in to a model 
const Book =mongoose.model('Book',BookSchema);
const User =mongoose.model('User',UserShhema);

//instance frome the model frome the Object
// //seeding data 
function bookCollection(){
const nemh =new User({
   email:'nemh998@gmail.com' ,
   books:[
       {
           name:'Ottolenghi Simple',
           description :'Great On Kindle: A high quality digital reading experience.',
           status:'3 Star'
       },
       {
        name:'Jacques Pépin Quick & Simple',
        description :'ore Than 125 Recipes for Instant, Overnight, Meal-Prepped, and Easy Comfort Foods: A Cookbook',
        status:'5 Star'
    }
   ]

});

const hope =new User({
    email:'hope181716@gmail.com' ,
    books:[
        {
            name:'Flavcity s 5 Ingredient Meals',
            description :' 50 Easy & Tasty Recipes Using the Best Ingredients from the Grocery Store (Heart Healthy Budget Cooking)',
            status:'4  Star'
        },
        {
         name:'5-Ingredient Cooking for Two: 100 Recipes Portioned for Pairs',
         description :'Great On Kindle: A high quality digital reading experience.',
         status:'5 Star'
     }
    ]});

nemh.save();
hope.save();
}
// bookCollection();

console.log(User);
console.log(Book);





// send data to front end 

function getUser(req,res){
    // response to make sure the send data
    const email  =req.query.email;
    console.log(email);
    User.find({ email },(err,user) => {

if(err)
{ res.send('didnt Work!!!');
console.error(err);
}

// else{
res.send(user[0].books);

// res.send('Work');
// console.log(user[0]);
// }
//http://localhost:8080/book?email=nemh998@gmail.com

});
}
module.exports=getUser;