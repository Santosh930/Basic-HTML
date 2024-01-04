// console.log(3);

// let arr=[1,2,3,4,5,5,6,7,7,8,9,10,10,10];
// let sum=0;
// for(let i=0;i<arr.length;i++){
//     sum += arr[i];
// }

// let result=arr.reduce(function(acc,elem){
//     return acc+elem;
// },10)
// console.log(result);
// console.log(sum);


//    let filter=arr.filter(function(elem,index){
//     return elem==10;
// });
// let map=arr.map(function(elem,index){
//     return elem;
// })
// console.log(filter);
// console.log(map);


// [5,5];
// let ans=[];
// for(let i=0;i<arr.length;i++){
//     if(arr[i]==5){
//         ans.push(arr[i]);
//         // console.log(arr[i]);
//     }
// }
// console.log(ans);


// function print(value){
//     setTimeout(function(){
//         console.log(value);
//     },5000)

// }
// print('Santosh');
let value=1;
function incriment(){
    setInterval(function(){
        value --;
        console.log(value);
    },1000);

};
// print('Santosh');
incriment();
