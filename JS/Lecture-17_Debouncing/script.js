// console.log('Debouncing');


// debouncing
let counter=0;


 function getData(){
    
    
    //calls an api and getting data...
    console.log(`fetching data... ${counter}`);
    counter++;
}
// getData();




function magicFunction(func,d){
    let timer;
   
    
    return function(){
// let context=this,args=arguments;
clearTimeout(timer);
      timer=setTimeout(function(){
        getData();
       

        },d)

    }
}


const debaunce=magicFunction(getData,1000);

//polyfill(make own function)


//1.polyfill for forEach function

// let arr=[1,2,3,4,5];

// Array.prototype.myForEach=function(callback) {
//     for (var i = 0; i < this.length; i++) {
//       callback(this[i], i, this);
//     }
//   };



// arr.myForEach(function(el,i,arr){
//     console.log(i);
// });



// 2.polyfill for map function

// Array.prototype.myMap=function(cb){
    
//     let arr=[];
//     for(let i=0;i<this.length;i++){
//         arr.push(cb(this[i],i,this));

//     }
//     return arr;
// };


// let arr=[1,2,3,4,5,6,7,8,9,10];
// let res=arr.map(function(el,index,arr){
//     return arr;
// })
// console.log(res);
// let ans=arr.myMap(function(el,i,arr){
//     return arr;
// });
// console.log(ans);



// function add(){
//     setTimeout(function(){
//         console.log('santosh');
//     },3000);
// };

// add();
// let a=1;

// function mul(){
//     let id;
//     clearInterval(id);
//     id=setInterval(function(){
//         console.log(` The value of a is${a}`);
//         a++;
//     },1000);
// }

// mul();


