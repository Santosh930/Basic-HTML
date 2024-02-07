



const express=require("express");
const app=express();
const mongoose=require("mongoose");
const path=require('path');
const methodOverride=require("method-override");
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname,'public')));
app.set('view engine',"ejs");
app.set('views',path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
const Chat=require('./models/chat.js');

let chat1=new Chat({
    from:'Santosh',
    to:"Vishawjeet",
    msg:"Hello vishwajeet.How are you!",
    created_at:new Date()

});
chat1.save().then((res)=>{
    // console.log(res);
});


main().then((res)=>{
    console.log(`Connected to DB`);
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}

app.listen('8080',()=>{
    console.log('server is listining on port 8080');
});
app.get('/',(req,res)=>{
    res.send('Home page');
});

//index route

app.get('/chats',async (req,res)=>{
    let Chats= await Chat.find();
    // console.log(chats);
    res.render('index.ejs',{Chats});
    // res.send('Santosh Kumar');
});

//new route

app.post('/chats/new',(req,res)=>{
    res.render('new.ejs');
});


//create route

app.post('/chats',(req,res)=>{
    // console.log(req.body);
    let {from,to,msg}=req.body;
    // console.log(from,to,msg);
    let newChat=new Chat({
        from:from,
        to:to,
        msg:msg,
        created_at:new Date()
    });

    newChat.save().then((res)=>{
        // console.log(res);
    }).catch((err)=>{
        // console.log(err)
    })
    res.redirect("/chats");
});

//Edit

app.get('/chats/:id/edit',async (req,res)=>{
    let {id} =req.params;
    console.log(req.params);
    // console.log(id);
    const chat=await Chat.findById(id);
    // console.log(chat);
    res.render('edit.ejs',{chat});
    // res.send("Hello world!");



});
//update route
//npm i method-override

app.put('/chats/:id',async (req,res)=>{
    let {id}=req.params;
    // console.log(id);
    let  {msg:newMsg}= req.body;
    // console.log(req.body);
    // console.log(newMsg)
    let updatedChat= await Chat.findByIdAndUpdate(
        id,
        {msg:newMsg},
        {runValidators:true,new:true},
        );
    console.log(updatedChat);
    res.redirect('/chats');
});


//destroy Route

app.delete('/chats/:id',async(req,res)=>{
    let {id}=req.params;
    let deletedChat= await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect('/chats');
})





