const express=require('express');
const app=express();


//middleware

// Middleware functions are functions that have access to the request object ( req ), the response object ( res ), and the next function in the application's request-response cycle. The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware.

const  middleware1=(req,res,next)=>{
    console.log("I am middleware-1");
    
    next();
}
const  middleware2=(req,res,next)=>{
    console.log("I am middleware-2");
    next();
    
}

//using the middleware

// app.use(middleware1);//middleware-1
// app.use(middleware2);






//routing start
app.get('/', middleware1,(req,res)=>{
    console.log('I am home page');
    
    res.send('This is home page!');
    
    
});
app.get('/about', middleware2,(req,res)=>{
    console.log('I am about page!');
    res.send('This is About page!');
    
});



app.listen(4000,()=>{
    console.log(`Server is running at port 4000`);
})