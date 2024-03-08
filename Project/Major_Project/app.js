const express=require('express');
const app=express();

const ejsMate=require('ejs-mate');
app.engine('ejs',ejsMate);
const path=require('path');
const methodOverride=require('method-override');
app.use(methodOverride('_method'));
const Listing=require('./models/listing.js')
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

//index route

app.get('/listings',async (req,res)=>{
   const allListings= await Listing.find({});
//    console.log(allListings);
   res.render('./listings/index.ejs',{allListings});
})


//show route

app.get('/listings/:id',async (req,res)=>{
    let {id}=req.params;
    // console.log(id);
    // console.log(req.params);
    const listing=await Listing.findById(id);
    res.render('./listings/show.ejs',{listing});

});
//new route

app.get('/listing/new',(req,res)=>{
    res.render('./listings/new.ejs');
});


//create route

app.post('/listings',async (req,res)=>{
    const newListing=new Listing(req.body.listing);
    await newListing.save()
    
    res.redirect('/listings');
});

//edit route

app.get('/listings/:id/edit',async  (req,res)=>{
    let {id}=req.params;
    const listing=await Listing.findById(id);
    res.render('./listings/edit.ejs',{listing});

});

//update route

app.put('/listings/:id',  async (req,res)=>{
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
     res.redirect(`/listings/${id}`);
});

//delete route

app.delete('/listings/:id',async (req,res)=>{
    let {id} = req.params;
    let deletedItem=await Listing.findByIdAndDelete(id);
    // console.log(deletedItem);
    res.redirect('/listings');
})


