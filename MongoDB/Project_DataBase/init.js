const mongoose=require("mongoose");
const Chat=require('./models/chat.js')
main().then((res)=>{
    console.log(`Connected to DB`);
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

 
};

Chat.insertMany([{
    from:'Santosh',
    to:"Vishawjeet",
    msg:"Hello vishwajeet.How are you!",
    created_at:new Date()

},
{
    from:'Rahul',
    to:"Vishawjeet",
    msg:"Hello vishwajeet.How are you!",
    created_at:new Date()

},
{
    from:'Sunil',
    to:"Vishawjeet",
    msg:"Hello vishwajeet.How are you!",
    created_at:new Date()

},
{
    from:'Anil',
    to:"Vishawjeet",
    msg:"Hello vishwajeet.How are you!",
    created_at:new Date()

}

]);

