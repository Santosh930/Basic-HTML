// console.log("Lecture-4");


//String

//1. By string literal
// var str="Hello I am santosh Kumar From Bihar";
// console.log(str[0]);

// let arr=[1,2,3,4];
// arr[0]=100;
// console.log(arr);
// str[0]="M";
// console.log(str);
// for(let i=0;i<str.length;i++){
//     console.log(str[i]);
// }

// aman----> naman not pallindrom
// oyo  ----> palindrom
// let str="naman";
// let str=prompt();
// function checkPalindrom(str){
//     // event.preventDefault();
//     let bag="";
// for(let i=str.length-1;i>=0;i--){
//     bag += str[i];
    

// }
// if(bag==str){
//     console.log("It is a Palindrom");
// }
// else{
//     console.log("It is not a palindrom");
// }

// }

// checkPalindrom(str);

// console.log(bag);


/* 
*
**
***
****
*****
******

*/
/* 

********
*      *
*      *
*      *
*      *
*      *
*      *
********


*/

// let str="";
// for(let i=0;i<=6;i++){
//   str+= "*";
//   console.log(str);
    
// }


//2.By string object (using new keyword)

// var str=new String("Naman");
// console.log(str);
// santosh---->SANTOSH
var str="santosh";
var upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var  lower="abcdefghijklmnopqrstuvwxyz";
// console.log(str.toUpperCase());
let bag="";
for(let i=0;i<str.length;i++){
    // bag += str[i];
    let a=str[i];
    for(let j=0;j<lower.length;j++){
        let b=lower[j];
        if(a==b){
           bag += upper[j];
           
        }
    }
}

// console.log(bag);


