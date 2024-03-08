const express=require('express');
const app=express();

const ejsMate=require('ejs-mate');

app.engine('ejs', ejsMate);
app.set('view engine','ejs');

app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.send('This is the home page!')
});

app.get('/about',(req,res)=>{
    res.render('./listings/about.ejs');
})
app.get('/home',(req,res)=>{

    res.render('./listings/home.ejs');
});
app.get('/contact',(req,res)=>{
    res.render('./listings/contact.ejs');
});
app.get('/checkOut',(req,res)=>{
    res.render('./listings/checkout.ejs');
})

app.listen(4000,()=>{
    console.log(`server is running on port 4000`);
})