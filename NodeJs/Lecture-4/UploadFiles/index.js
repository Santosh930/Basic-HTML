const express = require('express')
const multer  = require('multer')
const path=require('path');
const app = express();
app.set("view engine","ejs");
app.set("views",path.resolve("./views"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    
    cb(null, file.fieldname + '-' + Date.now() + file.originalname)
  }
})

const upload = multer({ storage:storage });






app.get('/',(req,res)=>{
  res.render("homepage");
})

app.post('/upload', upload.single('file'), function (req,res) {
  // req.file is the `avatar` file
  console.log(req.file);
  // // req.body will hold the text fields, if there were any

  console.log(req.body);
  res.send("File is uploaded!");
  // res.redirect('/');
  
});


app.listen(8080,()=>{
  console.log(`Server is running on port 8080`);
});