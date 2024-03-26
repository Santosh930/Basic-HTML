const express=require('express');
const router=express.Router();

//routes for posts
//Index -posts
router.get('/',(req,res)=>{
    res.send('GET for posts!');
});
//show -posts
router.get('/:id',(req,res)=>{
    res.send('GET for post id!');
});
//post -posts
router.post('/',(req,res)=>{
    res.send('Post for posts!');
});
//delete -posts
router.delete('/:id',(req,res)=>{
    res.send('Delete for post id!');
});


module.exports=router;