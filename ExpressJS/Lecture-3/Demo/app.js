const express=require('express');
const app=express();


app.get('',(req,res)=>{

    let obj={
        fname:'santosh',
        lname:'kumar'
    }
    res.render('index.ejs',{obj});
});


app.listen(4000,()=>{
    console.log('server is running on port 4000');
})