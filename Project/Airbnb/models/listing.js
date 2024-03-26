const mongoose=require('mongoose');
// console.log(mongoose);

const Schema  = mongoose.Schema;
const Review=require('./review.js');

// console.log(Schema);

const listingSchema = new Schema({
  title:{
    type:String,
    required:true,
  } , // String is shorthand for {type: String}
  description: String,
  image:{
    type:String,
    default:"https://a0.muscache.com/im/pictures/miso/Hosting-53519419/original/6ad6e166-e2b1-4704-be0a-fe85e514dfa8.jpeg?im_w=1200",
    set:(img)=> img===''?'https://a0.muscache.com/im/pictures/miso/Hosting-53519419/original/6ad6e166-e2b1-4704-be0a-fe85e514dfa8.jpeg?im_w=1200' :img,
  },
  price:Number,
  location:String,
  country:String,
  reviews:[
    {
        type:Schema.Types.ObjectId,
        ref:"Review",
    },
]
  
});

listingSchema.post('findOneAndDelete',async(listing)=>{
  if(listing){
    await Review.deleteMany({_id:{$in:listing.reviews}})
  }
})

const Listing=new mongoose.model('Listing',listingSchema);




module.exports=Listing;