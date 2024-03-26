const express=require('express');
const router=express.Router();




//routes for user
//Index -users
router.get('/',(req,res)=>{
    res.send('GET for users!');
});
//show -users
router.get('/:id',(req,res)=>{
    res.send('GET for user id!');
});
//post -users
router.post('/',(req,res)=>{
    res.send('Post for users!');
});
//delete -users
router.delete('/:id',(req,res)=>{
    res.send('Delete for user id!');
});

module.exports=router;