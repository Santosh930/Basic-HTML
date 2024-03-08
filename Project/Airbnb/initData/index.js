const initData=require('./data.js');
const Listing=require('../model/app.js');
const mongoose =require('mongoose');

const MONGO_URL="mongodb://127.0.0.1:27017/Airbnb-2";
main().then(()=>{
    console.log(`connected to DB`);
}).catch((error)=>{
    console.log(error);
})
 async function main(){

   await mongoose.connect(MONGO_URL);
};


const initDB= async()=>{
    await Listing.User.deleteMany({});
    await Listing.User.insertMany(initData.data);
    console.log('data was saved!');
}
initDB();
