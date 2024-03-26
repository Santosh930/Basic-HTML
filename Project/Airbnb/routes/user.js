const express=require('express');
const router=express.Router();

const User=require('../models/user.js');
const wrapAsync = require('../utils/wrapAsync.js');
const passport = require('passport');


//get route for sendinding signup form
router.get('/signup', wrapAsync( async (req,res)=>{
    res.render('users/signup.ejs');
}));

//create route for new users
router.post('/signup',wrapAsync(async(req,res)=>{
    try {
    console.log(req.body);
    let {username='santosh',email='santosh@gmail.com',password='abcde'}=req.body;
    // console.log(req.body);
    const newUser=new User({username,email});
    const registeredUser=await User.register(newUser,password);
    console.log(registeredUser);
    // apply flash
    req.flash('success','new user registered successfully!');
    
    res.redirect('/listings');
        
    } catch (error) {
        req.flash('error',error.message);
        res.redirect('/signup');
        
    }
}));

//get rout for login
router.get('/login',(req,res)=>{
    res.render('users/login.ejs')
});

//post rout for login
router.post('/login',passport.authenticate('local',{failureRedirect:'/login',failureFlash:true}),(req,res)=>{
    req.flash('success','Welcome to the Airbnb!');
    res.redirect('/listings');
})
module.exports=router;

