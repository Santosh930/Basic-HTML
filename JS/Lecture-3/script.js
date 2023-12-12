// console.log(10);

// Object

/**
  
  1) JavaScript Object by object literal
 object={property1:value1,property2:value2.....propertyN:valueN}  
 */

//  let obj1={
//     name:"Santosh Kumar",
//     city:"Patna",
//     mob:9873481283,
//  }
//  console.log(obj1);
//  console.log(obj1.name);
//  console.log(obj1["name"]);

// 2) By creating instance of Object

// let obj=new Object();
// obj.name="Santosh";
// obj.city="Tajpur";
// obj.mob=9873481283;
// console.log(obj);


// 3) By using an Object constructor

// function animal(name,voice,food){
//     this.name=name,
//     this.voice=voice,
//     this.food=food,
//     function food(abcd){
//         console.log(abcd);
//     }
// }

// let cat=new animal("Cat","mue-mue","Motton");

// console.log(Object.keys(cat));
// console.log(Object.entries(cat));
// console.log(Object.values(cat));

// // console.log(cat.name);

// JavaScript Array


// let arr=[1,2,3,4,"Santosh",true,];

// 2) JavaScript Array directly (new keyword)

// let arr=new Array();
// arr[0]=1
// arr[1]=2
// arr[2]=3
// arr[3]=4
// arr[4]=5

// console.log(arr);


let arr1=[1,3,5,7,9];
let arr2=[2,4,6,8,10];

arr1.push(20);
console.log(arr1);
// let result=arr1.concat(arr2);
// let result1=arr1.entries();
// console.log(result);
// console.log(result1);

// console.log(arr[0]);//1
// console.log(arr[4]);//5
// console.log(arr[9]);//10
// console.log(arr[10]);//undefined

// console.log(arr.length);//10

// let sum=0;
// for(let i=0;i<arr.length;i++){
//     // let a=arr[i];
//     sum  = sum +arr[i];
//     // console.log(arr[i]);
// }
// console.log(sum);


// How to find prime or not
 function Prime(number){
    
let factor=0;
for(let i=1;i<=number;i++){
    
    if(number%i==0){
        // console.log(a);
        factor++;

    }
    
    
}
// console.log(factor);
if(factor==2){
    console.log(`${number} is a Prime Number`);
}
else{
    console.log(`${number} is not a Prime Number`)
}

 }

 Prime(2);


//1,2,3,5,7,