const express=require('express');
const app=express();
const path=require('path');
app.use(express.static('public'));



const port=8080;

app.get('/',(req,res)=>{
    res.render('index.ejs');
});

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})