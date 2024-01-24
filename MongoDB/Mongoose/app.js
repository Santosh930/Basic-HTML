//npm install mongoose --save

const mongoose = require("mongoose");

main()
  .then((res) => {
    console.log('Connected to DB');
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
/* Schema Defines the shape of the documents within that collections.  */

// const userSchema=new mongoose.Schema({
//     name:String,
//     email:String,
//     age:Number

// });

//Models:-Model in mongoose is a class with which we construct documents.
// const User=mongoose.model("User",userSchema);
// const Customer=mongoose.Model("Customer",userSchema);

//inserting one element
// const user1=new User({name:'pawan',email:'pawan@gmail.com',age:40});
// const user2=new User({name:'Aman',email:'Aman@gmail.com',age:30});
// const user3=new User({name:'Raman',email:'Raman@gmail.com',age:50});
// const user4=new User({name:'sharvan',email:'sharvan@gmail.com',age:20});
// user1.save();
// user2.save();
// user3.save();
// user4.save().then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

//Inseerting Many Data in mongoose

// User.insertMany([{name:'pawan',email:'pawan@gmail.com',age:40},
// {name:'pawan',email:'pawan@gmail.com',age:40},
// {name:'pawan',email:'pawan@gmail.com',age:40},
// {name:'pawan',email:'pawan@gmail.com',age:40},
// {name:'pawan',email:'pawan@gmail.com',age:40}
    
// ]).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

//Find Methode

// Model.find()// Returns a Query Object(thennable);
// User.find().then((data)=>{
//     console.log(data);
// });
// User.find({age:{$gt:30}}).then((data)=>{
//     console.log(data);
// })

//###### Model.findOne();
// User.findOne({age:{$gte:100}}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

//###### Model.findById()

// User.findById({_id:"65acf3f3d13d879e2a922dd9"}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

//##### model.updateOne();

// User.updateOne({name:'santosh'},{age:100}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

//updateMany

// User.updateMany({age:{$gte:30}},{age:200}).then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });

//findOneAndUpdate

// User.findOneAndUpdate({name:'santosh'},{age:31},{new:true}).then((res)=>{
//       console.log(res);
//   }).catch((err)=>{
//       console.log(err);
//   });

//Delete one  '6505b26c115af80889ee81a3'

// User.deleteOne({name:'pawan'}).then((res)=>{
//         console.log(res);
//     }).catch((err)=>{
//         console.log(err);
//     });
//Delete Many
  //   User.deleteMany({name:'pawan'}).then((res)=>{
  //     console.log(res);
  // }).catch((err)=>{
  //     console.log(err);
  // });

  // findByIdAndDelete

//   User.findByIdAndDelete("65acf59d9b0bd7227bfc4c94").then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// });


//findOneAndDelete()

// User.findOneAndDelete('6505b26c115af80889ee81a4').then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// });






