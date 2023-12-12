// let x='Santosh Kumar';

// console.log(x);

// Single-line Comment



/* 


 Multi-line Comment


let date=document.getElementById('date');
 date.innerText=new Date();

 hjdsjhznbbnnbznbZ


let arr=[1,2,3,4,5];  */


// There are some rules while declaring a JavaScript variable (also known as identifiers).

// Name must start with a letter (a to z or A to Z), underscore( _ ), or dollar( $ ) sign.
// After first letter we can use digits (0 to 9), for example value1.
// JavaScript variables are case sensitive, for example x and X are different variables.

// Valid 
var name='santosh';
var _name ='santosh';
var $name ='Santosh';
var Name='Santosh';
var fullNameFromCourse='Santosh Kumar';

//Invalid
// var name kumar ='Santosh'; 
//  var 1name ='Santosh';
// var name# ='Santosh'


// local variabl
let c=null;
let d;

// function sum(){
//      let a=100;  //local variable 
//     let b=20;    //local variable
//     let add=a+b;
//     console.log(add);
//     console.log(c);
//     console.log(d);
// }

// console.log(c);
// console.log(d);

let fullName ='Santosh';
let number =2345;
let followers =true;
let arr =[1,2,3,4,5];
let obj ={name:'Santosh',city:'Samastipur'};
let lastName ;
let email=null;

let xyz=BigInt(1234567);
// console.log(xyz);
// console.log(typeof xyz);

// let abc=Symbol('santosh');
// console.log(abc);
// console.log( typeof abc);



// console.log(typeof fullName);
// console.log(typeof number);
// console.log(typeof followers);
// console.log(typeof arr);
// console.log(typeof obj);
// console.log(typeof email);
// console.log(typeof lastName);


// sum();

//1.Arithmetic operators

/*
Addition(+) 10+20=30
Subtraction(-) 20-10=10
Multiplication(*) 10*10=100
Division(/) 20/2 = 10
Modulus (Remainder)(%) 12%10=2
Increment(++) var a=10; a++; Now a = 11;
Decrement(--) var a=10; a--; Now a = 9;



 */

// let modulus=0;

// console.log(modulus%4);
// console.log(0/1);//Zero
// console.log(1/0);//infinity
// console.log(0/0);//


//pre increment/post increment
//pre decrement/post deincrement

// let pre=5;
// let post=5;

// console.log(pre++);
// console.log(pre);
// console.log(++post);
// console.log(post);


// 2.JavaScript Comparison Operators

let a=10;
let b='10';

// console.log(a==b);//true     Is equal to
// console.log(a===b);//false   Identical (equal and of same type)

// console.log(a>b);//false  Greater than
// console.log(a<b);//true Less than
// console.log(a>=b);//false Greater than or equal to
// console.log(a<=b);//true   Less than or equal to

// console.log(20!=='20');   //true         Not Identical

// console.log(123+'456');//123456
// console.log(1234-'1234');//1234-1234
// console.log(true+ '12345');//true12345
// console.log(true-'1');// 0

/*
Binary Number(Base-2(0,1));
HexaDecimal Number(Base-16(0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F))
Octal Number(Base-8(0,1,2,3,4,5,6,7));
Decimal Number(Base-10(0,1,2,3,4,5,6,7,8,9,))

10-  1010;
  8421 
0-0000
1-0001
2-0010
3-0011
4-0100


truth table
1.And Get 
X Y  R
1 1 1       true || true  
0 1 0
1 0 0

2.OR GATE
X Y R
1 1 1
0 0 0
0 1 1
1 0 1


*/

  let x=15;
  let y=15;

  function add(){
    let evenSum=0;
    let oddSum=0;
    for(let i=1;i<=5;i++){
        
        // sum += i;//Add and assign
        // sum -= i;  //Subtract and assign
        // sum *= i;
        // sum = sum*i;// 1*1=1  1*2=2 2*3 6*4 24*5
        // if(i%2==0){
        //     // console.log(i);
        //     evenSum += i;
        // }
        // else{
        //     oddSum += i;
        // }

        i%2==0?evenSum +=i:oddSum +=i;
        
        
        
    }
    // console.log(evenSum,oddSum);
    // console.log(oddSum);
  }
  add();
// console.log((x^y));

/*
 1111
 1111  0011
*/

// console.log(10<<2);  //10*2^2





