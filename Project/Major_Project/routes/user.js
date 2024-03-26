const express=require('express');
const router=express.Router();

const User=require('../models/user.js');



router.get('/signup',  async (req,res)=>{
    res.render('users/signup.ejs');
});

router.post('/signup',async(req,res)=>{
    console.log(req.body);
    let {user='santosh',email='santosh@gmail.com',password='abcde'}=req.body;
    // console.log(req.body);
    const newUser=new User({email,user});
    const registeredUser=await User.register(newUser,password);
    console.log(registeredUser);
    // req.flash("success",'welcome to airbnb');
    res.redirect('/listings');
});
module.exports=router;

