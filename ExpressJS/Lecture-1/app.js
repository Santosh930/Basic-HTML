const express=require('express');
const path=require('path');
const app=express();

// app.set('view engine','ejs');

// console.log( path.join(__dirname,'public'));
// app.use(express.static(path.join(__dirname,'public')));
// const viewsPath=path.join(__dirname,'templates');
// app.set('views',viewsPath);

const port=4000;
app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
});

app.get('/',(req,res)=>{
    // res.send("<h1>Hello World This is home Page!</h1>");
    // res.send(path.join(__dirname,'public'));
    res.render('index.ejs')
    
});
app.get('/about',(req,res)=>{
    
    // res.send("<h1>This is About Page-1!</h1>");
    // res.write("<h1>This is About Page!</h1>");
    // res.write("<h1>This is About Page!</h1>");
    // res.write("<h1>This is About Page!</h1>");
    // res.write("<h1>This is About Page!</h1>");
    // res.write("<h1>This is About Page!</h1>");
    // res.end("<h1>This is last page of About Page!</h1>");
    // res.send("<h1>This is About Page-1!</h1>");

    //how to send json data
    // res.json({
    //     id:1,
    //     name:'santosh'
    // })

    // res.send({
    //     id:1,
    //     name:'santosh'
    // })
//     res.json([
//         {
//         id:1,
//         name:'santosh'
//     },
//     {
//         id:1,
//         name:'santosh'
//     },
//     {
//         id:1,
//         name:'santosh'
//     },
//     {
//         id:1,
//         name:'santosh'
//     },
//     {
//         id:1,
//         name:'santosh'
//     },
//     {
//         id:1,
//         name:'santosh'
//     },
// ])

res.send('hello world!');
    
    
});
app.get('/contact',(req,res)=>{
    res.send("<h1>This is contact Page!</h1>");
    
});
app.get('/main',(req,res)=>{
    res.send("<h1>This is main Page!</h1>");
    
});
app.get('/checkout',(req,res)=>{
    res.send("<h1>This is checkout Page!</h1>");
    
});
app.all('*',(req,res)=>{
    res.send(`<h1>Pls check another rout.This Path is not found!</h1>`);
})