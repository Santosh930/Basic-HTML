


const express=require('express');
const app=express();

const sendMail=require('./controler/sendMail');

const PORT=3000;

app.get('/',(req,res)=>{
    res.send("This is home Page!");
});
app.get('/mail',sendMail);

const start=async ()=>{
    try {
        app.listen(PORT,()=>{
            console.log(`Server is listening on Port ${PORT}`);
        })
        
    } catch (error) {
        console.log(error);
        
    }
}
start();