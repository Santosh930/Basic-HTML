const express=require('express');
const mongoose=require('mongoose');
const model=require('./model/app.js');
const MONGO_URL="mongodb://127.0.0.1:27017/Airbnb-2"
const app=express();
//for applying css
app.use(express.static('public'));
//for using another method except get & post
const methodOverride=require('method-override');
app.use(methodOverride('_method'));
//for ejs-mate template
const ejsMate=require('ejs-mate');
app.engine('ejs',ejsMate);

//wrapAsync
const wrapAsync=require('./utils/wrapAsync.js');

//expressError
const ExpressError=require('./utils/ExpressError.js');


const Listing=require('./model/app.js');

app.use(express.urlencoded({extended:true}));




//database connectivity
main().then(()=>{
    console.log('Connected DB!');
}).catch((err)=>{
    console.log(err);
})

async function main(){
    mongoose.connect(MONGO_URL);

}
//inserting sample data in db...

// app.get('/testData', async   (req,res)=>{

// let listing=new model.User({
//     title:"The palace",
//     description:"The place is good!",
//     image:'',
//     price:1200,
//     location:'Delhi',
//     country:'India',

// });
//     await listing.save();
//     console.log(listing);

//     res.send("Data was successfully saved!");


// });





//home route
app.get('/',(req,res)=>{
    res.render("./listings/home.ejs");
});

//index route

app.get('/listings',async (req,res)=>{

    let allListings= await Listing.User.find({});
    // console.log(allListings);
    res.render('./listings/index.ejs',{allListings});
});




//show route

app.get('/listings/:id',async (req,res)=>{
    let {id}=req.params;

    const listing=await  Listing.User.findById(id);
    // console.log(listing);
    // console.log(name);
    // console.log(req.params);



    res.render('./listings/show.ejs',{listing});



});


// new route
app.get('/listing/new',(req,res)=>{
    res.render('./listings/new.ejs')

});
//creat route
// app.post('/listings', async (req,res,next)=>{

//     try {

//     const newListing=new Listing.User(req.body);
//     await newListing.save()
//    // console.log(newListing);
//     res.redirect('/listings');
    
        
//     } catch (error) {
//         next(error);
        
//     }

// });
//create rout
app.post('/listings',wrapAsync(async (req,res)=>{
    const newListing=new Listing.User(req.body);
    //   if(!newListing.title){
    //         throw new ExpressError(400,'title is missing!');
    
    //     }
    //     if(!newListing.price){
    //         throw new ExpressError(400,'price is missing!');
    
    //     }
    //     if(!newListing.location){
    //         throw new ExpressError(400,'location is missing!');
    
    //     }
    //     if(!newListing.description){
    //         throw new ExpressError(400,'description is missing!');
    
    //     }
    await newListing.save()
   // console.log(newListing);
    res.redirect('/listings');

    

}));

//edit route
app.get('/listings/:id/edit',wrapAsync(async (req,res)=>{
    let {id}=req.params;
    const listing=await  Listing.User.findById(id);

    res.render('./listings/edit.ejs',{listing});
}));

//update route

app.put('/listings/:id', wrapAsync(async (req,res)=>{
    let {id}=req.params;

    await Listing.User.findByIdAndUpdate(id,{...req.body});

    res.redirect(`/listings/${id}`);

}));

//delete

app.delete('/listings/:id', wrapAsync( async(req,res)=>{
    let {id}=req.params;
   const deletedListing= await Listing.User.findByIdAndDelete(id);
//    console.log(deletedListing);
   res.redirect('/listings');
    
}));

//all route
app.all('*',(req,res,next)=>{
    next(new ExpressError('404','Page Not Found!'));
});


//middle ware for custom error handling
app.use((error,req,res,next)=>{
    let {statusCode=500,message="Something went wrong!"}=error;
    // console.log(statusCode);
    // console.log(message);
    // res.status(statusCode).send(message);
    res.status(statusCode).render('./listings/err.ejs',{error});
})

app.listen(8080,()=>{
    console.log('server is running on port 8080');
})