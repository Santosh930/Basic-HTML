const express=require('express');
const router=express.Router({mergeParams:true});
const Listing=require('../models/listing.js');
const Review=require('../models/review.js');
const wrapAsync=require('../utils/wrapAsync.js');
const ExpressError=require('../utils/ExpressError.js');
const {reviewSchema,listingSchema}=require('../schema.js');
//schema validation for review
const validateReview=(req,res,next)=>{
    let {error}=reviewSchema.validate(req.body);
    if(error){
        throw new ExpressError(400,error);
    }
    else{
        next();
    }
};

//routes for review

router.post('/',validateReview,wrapAsync(async (req,res)=>{
    let {id}=req.params;
    const listing= await Listing.findById(id);
    let newReview=new Review(req.body.review);
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
    // apply flash
    req.flash('success','New Listing review Created successfully!');
    console.log('new reviews saved!');
    // res.send('new reviews saved!');
    res.redirect(`/listings/${id}`);
}));

//delete review route
router.delete('/:reviewId',wrapAsync(async(req,res)=>{
    let {id,reviewId}=req.params;
    await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}})
    await Review.findByIdAndDelete(reviewId);
    // apply flash
    req.flash('success','Listing review deleted successfully!');
    
    res.redirect(`/listings/${id}`);
}));

module.exports=router;

