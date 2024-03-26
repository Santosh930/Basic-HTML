const mongoose=require('mongoose');
const {Schema}=mongoose;

main().then(()=>{
    console.log('Connected to DB');
}).catch((err)=>{
    console.log(err);
});


async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

const userSchema=new Schema({
    username:String,
    addresses:[
        {
            _id:false,
        location:String,
        city:String,
        },
    ],

});

const User=mongoose.model("User",userSchema);

const addUsers=async()=>{
    let user1=new User({
       username:'Santosh',
       addresses:[
        {
            
            location:'Bihar',
            city:'Patna',
        },
       ] ,


    })
    user1.addresses.push({
        location:'India',
        city:'Delhi',
    });
    let result=await user1.save();
    console.log(result);
}

addUsers();