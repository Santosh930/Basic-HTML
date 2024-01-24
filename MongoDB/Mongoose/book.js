// const mongoose = require("mongoose");

// main()
//   .then((res) => {
//     console.log(`Connected to DB`);
//   })
//   .catch((err) => console.log(err));

// async function main() {
//   await mongoose.connect("mongodb://127.0.0.1:27017/flipKart");

  
// }


//Schema Validations
// const bookSchema=new mongoose.Schema({
//     name:{
//         type:String,
//         required:true,
//     },
//     author:{
//         type:String,
//     },
//     price:{
//         type:Number,
//     }

// });

// const Book=mongoose.model("Book",bookSchema);
// const book1=new Book({
//     name:"Mathematics",
//     author:"Rd-Sharma",
//     price:500
// });
// const book2=new Book({
//     name:"Mathematics 12",
//     author:"Rd-Sharma",
//     price:400
// });

// book1.save();
// book2.save();