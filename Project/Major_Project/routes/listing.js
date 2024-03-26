const express=require('express');
const router=express.Router();
const Listing=require('../models/listing.js');
const wrapAsync=require('../utils/wrapAsync.js');
const ExpressError=require('../utils/expressError.js')
const {listingSchema,reviewSchema}=require('../schema.js');



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
    const allListings= await Listing.find({});
 //    console.log(allListings);
    res.render('./listings/index.ejs',{allListings});
 }));
 //new route
 
 router.get('/new',(req,res)=>{
     res.render('./listings/new.ejs');
 });
 
 
 //show route
 
 router.get('/:id',wrapAsync(async (req,res)=>{
     let {id}=req.params;
     // console.log(id);
     // console.log(req.params);
     const listing=await Listing.findById(id);
     res.render('./listings/show.ejs',{listing});
 
 }));
 
 
 
 //create route  handle error by using try catch
 
 // app.post('/listings',async (req,res,next)=>{
 
 //     try {
 
 //     const newListing=new Listing(req.body.listing);
 //     await newListing.save()
     
 //     res.redirect('/listings');
         
 //     } catch (error) {
 //         next(error);
         
 //     }
 
     
 // });
 
 //error handling by using wrapAsync
 router.post('/', validateListing, wrapAsync(async (req,res,next)=>{
 
     //handle error if data is empty
 
     // if(!req.body.listing){
     //     throw new ExpressError(400,'send valid data for listing!');
     // }
 
     const newListing=new Listing(req.body.listing);
     // if(!newListing.title){
     //     throw new ExpressError(400,'title is missing!');
 
     // }
     // if(!newListing.price){
     //     throw new ExpressError(400,'price is missing!');
 
     // }
     // if(!newListing.location){
     //     throw new ExpressError(400,'location is missing!');
 
     // }
     // if(!newListing.description){
     //     throw new ExpressError(400,'description is missing!');
 
     // }
 
     //handle only a single line by joi
     // let result=listingSchema.validate(req.body);
     // console.log(result);
     // if(result.error){
     //     throw new ExpressError(400,result.error);
 
     // }
     await newListing.save()
     
     res.redirect('/listings');
         
     
     
 }));
 
 //edit route
 
 router.get('/:id/edit', wrapAsync(async  (req,res)=>{
     let {id}=req.params;
     const listing=await Listing.findById(id);
     res.render('./listings/edit.ejs',{listing});
 
 }));
 
 //update route
 
 router.put('/:id', wrapAsync(async (req,res)=>{
     if(!req.body.listing){
         throw new ExpressError(400,'send valid data for listing!');
     }
     let {id} = req.params;
     await Listing.findByIdAndUpdate(id,{...req.body.listing});
      res.redirect(`/listings/${id}`);
 }));
 
 //delete route
 
 router.delete('/:id', wrapAsync(async (req,res)=>{
     let {id} = req.params;
     let deletedItem=await Listing.findByIdAndDelete(id);
     // console.log(deletedItem);
     res.redirect('/listings');
 }));
 
 














module.exports=router;