const express=require('express');
const mongoose=require('mongoose');
const model=require('./model/app.js');
const MONGO_URL="mongodb://127.0.0.1:27017/Airbnb-2"
const app=express();



main().then(()=>{
    console.log('Connected DB!');
}).catch((err)=>{
    console.log(err);
})

async function main(){
    mongoose.connect(MONGO_URL);

}
//inserting sample data in db...

app.get('/testData', async   (req,res)=>{

let listing=new model.User({
    title:"The palace",
    description:"The place is good!",
    image:'',
    price:1200,
    location:'Delhi',
    country:'India',

});
    await listing.save();
    console.log(listing);

    res.send("Data was successfully saved!");


});






app.get('/',(req,res)=>{
    res.send("This is home Page!");
});

app.listen(8080,()=>{
    console.log('server is running on port 8080');
})