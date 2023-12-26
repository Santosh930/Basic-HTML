// console.log("Lecture-10");

/** 
this,call,apply,bind,Hoisting,Arrow Function
DRY-Do Not Repeat yourself













*/

//Hoisting
// "use strict";

// console.log(this);//window object;
// y=20;

// Add(5,6);//11

// var result;
// console.log(result);//undefined

// result=30;
// console.log(result);//30;


// function Add(a,b){
//     console.log(this);
//     console.log(a+b)
// }

// let Add=(a,b)=>{
//     console.log(a+b);
//     console.log(this);
// }
// console.log(a+b);
    // console.log(a+b);
    




// let example=Add(6,7);
// console.log(example);


// Add(5,3);//8


// let ans="html";
// console.log(ans);
// function print(){
//     console.log(this.result);
// }
// print();
// console.log(this.result);

//call,apply,bind

// let obj={
//     fname:"Santosh",
//     lname:"Kumar",
    
// }
// let obj1={
//     fname:"Vishwajeet",
//     lname:"Kumar",
    
// }
// let obj2={
//     fname:"Sachin",
//     lname:"Tendulker",
    
// }
// let  printFullName=function(city,mob){
//     console.log(this.fname +" "+ this.lname +" " +" " +"from"+" " + city+" "+ "And His Mob Number is "+ mob );
// }
// printFullName.call(obj,"Bihar",9873481283);//Santosh Kumar
// printFullName.apply(obj1,["Delhi",12456788]);//Vishwajeet Kumar;
// let sachin=printFullName.bind(obj2,"Mumbai",2222222222);
// sachin();




// obj.printFullName();//
// obj1.printFullName();
// obj2.printFullName();
// console.log(obj);//full obj
// console.log("rrrrrrrrrrrr");

// let obj1={
//     fname:"Sachin",
//     lname:"Tendulkar"
// }

// obj.printFullName.call(obj1);

// let printFullName=function(city,mob,email){
//     console.log(this.fname + " "+ this.lname +" " +"From" + " "+ city +" " + "And him mob number and emails are" + " "+ mob + " "+ email);
// }
// printFullName.call(obj1,"Delhi",9873481283,"sachin@gmail.com");
// printFullName.call(obj1,"Mumbai",9873481283 ,"sachintendulkar@gmail.com");
// printFullName.apply(obj1,["Mumbai",9873481283 ,"sachintendulkar@gmail.com"]);
// let printMyName=printFullName.bind(obj1,"Delhi",9873481283,"sachin@gmail.com");
// printMyName();




