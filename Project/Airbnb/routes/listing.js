const express=require('express');

const router=express.Router();
const wrapAsync=require('../utils/wrapAsync');
const ExpressError=require('../utils/ExpressError.js');
const Listing=require('../models/listing.js');
const {listingSchema,reviewSchema}=require('../schema.js');

//apply joi as a middleware

const validateListing=(req,res,next)=>{
    let {error}=listingSchema.validate(req.body);
    if(error){
        throw new ExpressError(400,error);
    }
    else{
        next();
    }
};



//index route

router.get('/', wrapAsync(async (req,res)=>{

    let allListings= await Listing.find({});
    // console.log(allListings);
    res.render('./listings/index.ejs',{allListings});
}));
// new route
router.get('/new', (req,res)=>{
    res.render('./listings/new.ejs')

});




//show route

router.get('/:id', wrapAsync(async (req,res)=>{
    let {id}=req.params;

    const listing=await  Listing.findById(id).populate('reviews');
    // console.log(listing);
    // console.log(name);
    // console.log(req.params);
    if(!listing){
        req.flash('error','This Listing is not existing!');
        res.redirect('/listings');
    }



    res.render('./listings/show.ejs',{listing});



}));



//creat route
// router.post('/', wrapAsync(async (req,res,next)=>{

//     try {

//     const newListing=new Listing(req.body.listing);
//     await newListing.save()
//    // console.log(newListing);
//     res.redirect('/listings');
    
        
//     } catch (error) {
//         next(error);
        
//     }

// }));
//create rout
router.post('/',validateListing,wrapAsync(async (req,res)=>{
    const newListing=new Listing(req.body.listing);
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
    await newListing.save();
    // apply flash
    req.flash('success','New Listing Created Successfully!');
   // console.log(newListing);
    res.redirect('/listings');

    

}));

//edit route
router.get('/:id/edit',wrapAsync(async (req,res)=>{
    let {id}=req.params;
    const listing=await  Listing.findById(id);
    if(!listing){
        req.flash('error','This Listing is not existing!');
        res.redirect('/listings');
    }

    res.render('./listings/edit.ejs',{listing});
}));

//update route

router.put('/:id', wrapAsync(async (req,res)=>{
    let {id}=req.params;

    const update=await Listing.findByIdAndUpdate(id,{...req.body.listing});
    // apply flash
    req.flash('success','Listing updated successfully!');
    console.log(update);

    res.redirect(`/listings/${id}`);

}));

//delete route post

router.delete('/:id', wrapAsync( async(req,res)=>{
    let {id}=req.params;
   const deletedListing= await Listing.findByIdAndDelete(id);
   console.log(deletedListing);
   // apply flash
   req.flash('success','Listing deleted successfully!');
   res.redirect('/listings');
    
}));


module.exports=router;