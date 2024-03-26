const mongoose=require('mongoose');
const initData=require('../initDB/data.js');
const Listing=require('../models/listing.js');
const MONGO_URL="mongodb://127.0.0.1:27017/airbnb";
main().then(()=>{
    console.log(`connected to DB`);
}).catch((error)=>{
    console.log(error);
})
 async function main(){

   await mongoose.connect(MONGO_URL);
};


const initDB= async()=>{
    // await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log('data was saved!');
}
initDB();