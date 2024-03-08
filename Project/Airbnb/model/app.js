const mongoose=require('mongoose');
// console.log(mongoose);

const Schema  = mongoose;

// console.log(Schema);

const listingSchema = new Schema({
  title:{
    type:String,
    required:true
  } , // String is shorthand for {type: String}
  description: String,
  image:{
    type:String,
    default:"https://images.unsplash.com/photo-1557167305-d219e49f2777?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    set:(img)=> img===''?'https://images.unsplash.com/photo-1557167305-d219e49f2777?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80' :img,
  },
  price:Number,
  location:String,
  country:String
  
});

const User= mongoose.model('User',listingSchema);




module.exports={User};