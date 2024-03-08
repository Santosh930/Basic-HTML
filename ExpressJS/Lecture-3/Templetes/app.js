// What is a template engine
// A template engine facilitates you to use static template files in your applications. At runtime, it replaces variables in a template file with actual values, and transforms the template into an HTML file sent to the client. So this approach is preferred to design HTML pages easily.

// Pug (formerly known as jade)
// mustache
// dust
// atpl
// eco
// ect
// ejs
// haml
// haml-coffee
// handlebars
// hogan
// jazz
// jqtpl
// JUST
// liquor
// QEJS
// swig
// templayed
// toffee
// underscore
// walrus
// whiskers

// Views: It specifies a directory where the template files are located.
// For example: app.set('views', './views').

// view engine: It specifies the template engine that you use. For example, to use the ejs template engine: app.set('view engine', 'ejs').


const express =require('express');
const app=express();
app.set('views', './views');
app.set('view engine', 'ejs');
app.engine('ejs',engine);



app.get('/',(req,res)=>{
    let obj={
        fname:'santosh',
        lname:'kumar'
    }
    res.render('index.ejs',{obj})
});
app.get('/about',(req,res)=>{
    let obj={
        fname:'Ram',
        lname:'Kumar'
    }
    res.render('about.ejs',{obj})
});
app.get('/home',(req,res)=>{
    let obj={
        fname:'Pawan',
        lname:'Kumar'
    }
    res.render('home.ejs',{obj})
});


app.listen(4000,(req,res)=>{
    console.log(`server is running on port 4000`);
});

