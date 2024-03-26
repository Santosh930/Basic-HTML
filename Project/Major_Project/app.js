const express=require('express');
const app=express();
//apply all router

const userRouter=require('./routes/user.js');
const listingRouter=require('./routes/listing.js');


const {listingSchema,reviewSchema}=require('./schema.js');


//require wrapAsync for custum error handling

const wrapAsync=require('./utils/wrapAsync.js');
 
//for custome Express  error
const ExpressError=require('./utils/expressError.js');

//for signup/login using passport
const  session=require('express-session');
const sessionOptions={
    secret:"mysupersecratestring",
    resave:false,
    saveUninitialized:true,

}
app.use(session(sessionOptions));

const passport=require('passport');
const LocalStrategy=require('passport-local');
const User=require('./models/user.js');

// // app.use(flash());
// app.use(passport.initialize());
// app.use(passport.session());//session
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());








//for express-session
app.get('/test',(req,res)=>{
    res.send('Session apply')
});

app.get('/reqcount',(req,res)=>{
    if(req.session.count){
        req.session.count++;
    }
    else{
        req.session.count=1;
    }
    res.send(`The total reqcount is ${req.session.count} `);
})

const ejsMate=require('ejs-mate');
app.engine('ejs',ejsMate);
const path=require('path');
const methodOverride=require('method-override');
app.use(methodOverride('_method'));
const Listing=require('./models/listing.js');
const Review=require('./models/review.js');
const mongoose = require('mongoose');
const MONGO_URL="mongodb://127.0.0.1:27017/airbnb";
app.use(express.urlencoded({extended:true}));
main().then(()=>{
    console.log(`connected to DB`);
}).catch((error)=>{
    console.log(error);
})
 async function main(){

   await mongoose.connect(MONGO_URL);
}

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'/public')));
app.listen(4000,(req,res)=>{
    console.log(`server is running on port 4000`);
});
app.get('/',(req,res)=>{
    res.render(`./listings/home.ejs`);

});

//call all routers

app.use('/',userRouter);
app.use('/listings',listingRouter);
// app.get('/demouser',async(req,res)=>{
//     let fakeUser=new User({
//         email:'raman@gmail.com',
//         username:'raman',
//     });
//     let registeredUser=await User.register(fakeUser,'helloworld');
//     res.send(registeredUser);
// });





//apply joi as a middleware



//schema validation for review
const validateReview=(req,res,next)=>{
    let {error}=reviewSchema.validate(req.body);
    if(error){
        throw new ExpressError(400,error);
    }
    else{
        next();
    }
}

//sample testing 
// app.get('/testListing',async (req,res)=>{
//     let sampleListing=new Listing({
//         title:"My New Villa",
//         description:"By the beach",
//         price:1200,
//         location:"patna",
//         country:"India"
//     });
//     await sampleListing.save();
//     console.log('sample was saved!');
//     res.send('successful testing');

// });


//routes for review

app.post('/listings/:id/reviews',validateReview,wrapAsync(async (req,res)=>{
    let {id}=req.params;
    const listing= await Listing.findById(id);
    let newReview=new Review(req.body.review);
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
    console.log('new reviews saved!');
    // res.send('new reviews saved!');
    res.redirect(`/listings/${id}`);
}));

//for other route(all/*)

app.all('*',(req,res,next)=>{
    // res.send('Page Not found!');
    next(new ExpressError(404,'Page Not Found!'));

})


//for custome error handling  make a middleware

// app.use((err,req,res,next)=>{
//     res.send('Something went wrong!');
// });

//for handling custum exprees error

app.use((err,req,res,next)=>{
    // console.log(err);
    
    let {statusCode=500,message="Something went wrong!"}=err;
    // console.log(statusCode,message);
    // res.status(statusCode).send(message);

    //render err.ejs page

    res.status(statusCode).render('./listings/err.ejs',{err});
});




