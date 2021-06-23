// install mongoose
// const { response } = require('express');

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
    // imageUrl:String
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
   email:'nemh998@gmail.com' 
   ,
   books:[
       {
           name:'Ottolenghi Simple',
           description :'Great On Kindle: A high quality digital reading experience.',
           status:'3 Star'
        //    ,
        //    imageUrl:"1"
       },
       {
        name:'Jacques Pépin Quick & Simple',
        description :'ore Than 125 Recipes for Instant, Overnight, Meal-Prepped, and Easy Comfort Foods: A Cookbook',
        status:'5 Star'
        // ,
        // imageUrl:"1"
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
            // ,
            // imageUrl:"1"
        },
        {
         name:'5-Ingredient Cooking for Two: 100 Recipes Portioned for Pairs',
         description :'Great On Kindle: A high quality digital reading experience.',
         status:'5 Star'
        //  ,
        //  imageUrl:"1"
     }
    ]});

nemh.save();
hope.save();
}
// bookCollection();

console.log(User);
console.log(Book);







module.exports=User;
