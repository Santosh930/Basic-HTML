const express=require('express');
const app=express();

//connect-flash
const flash = require('connect-flash');
//cokie parser

const cokieesParser=require('cookie-parser');
app.use(cokieesParser("secretcode"));
app.listen(3000,()=>{
    console.log('app is running on port 3000');
});
//for sending cookie
app.get('/sendcookies',(req,res)=>{
    res.cookie('Greete','Hello');
    res.cookie('Greetsr','Hi');
    res.cookie('Greets','Bye');
    res.cookie('Greet','Good Night');
    res.send('Sending Own Cookies!');
});
app.get('/',(req,res)=>{
    // console.log(req.cookies);
    console.dir(req.cookies);
    res.send('Hi I am root route:');
});

//signed cookies

app.get('/getsignedcookie',(req,res)=>{
    res.cookie('made-in','India',{signed:true});
    res.send('Signed cookie send!');
});

//verify
app.get('/verify',(req,res)=>{
    console.log(req.signedCookies);
    // console.log(req.cookies);
    res.send('Verify done');
})


app.get('/greet',(req,res)=>{
   const {name='Ram'}=req.cookies;
   res.send(`Hi ${name}`);
});


//express session
const session=require('express-session');
const sessionOptions={
    secret:"mysupersecratestring",
    resave:false,
    saveUninitialized:true,

}
app.use(session(sessionOptions));
app.use(flash());
app.use((req,res,next)=>{
    res.locals.successMsg=req.flash('success');
    res.locals.errorMsg=req.flash('error');
    next();
})
app.get('/register',(req,res)=>{
    let {name='anonymous'}=req.query;
    req.session.name=name;
    if(name==='anonymous'){
        req.flash('error','user not registered!')
    }
    else{
        req.flash('success','user register successfully!');

    }
    
    
    
    res.redirect(`/hello`);
});
app.get('/hello',(req,res)=>{
    // res.locals.successMsg=req.flash('success');
    // res.locals.errorMsg=req.flash('error');
    res.render('./page.ejs',{name:req.session.name});
})
app.get('/test',(req,res)=>{
    res.send('express-Session is apply');
});

app.get('/reqcount',(req,res)=>{
    if(req.session.count){
        req.session.count++;
    }
    else{
        req.session.count=1;
    }
    res.send(`The total reqcount is ${req.session.count} `);
});



//users routes

const userRout=require('./routes/user.js');
app.use('/users',userRout);

//posts routes

const postRout=require('./routes/post.js');
app.use('/posts',postRout);



