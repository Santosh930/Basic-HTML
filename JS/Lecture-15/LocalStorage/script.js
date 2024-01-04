// console.log("localeStorage");

// let name1='Santosh';
// let number=12345;
// let obj={
//     fnme:'Santosh',
//     lname:'Kumar'
// };
// let arr=[{
//     fname:'Rohan',
//     lname:'Kumar'
// }];
// localStorage.setItem('newArr',JSON.stringify(arr));
// localStorage.setItem('NewObj',JSON.stringify(obj));
// localStorage.setItem('newNumber',number);
// localStorage.setItem('newName',name1);
//  let newName=JSON.parse(localStorage.getItem('NewObj'));
// let NewObj=localStorage.getItem('NewObj');
// let newArr=JSON.stringify(localStorage.getItem('newArr'));
// console.log(newName);
// console.log(newName);
// console.log(newArr);
// localStorage.removeItem('newArr');
// localStorage.clear()

// [{},{},{},{},{}]
document.querySelector('form').addEventListener('submit',myfunc);
let arr=[];

function myfunc(e){
    e.preventDefault();
let name=document.getElementById('name').value;
let email=document.getElementById('email').value;
let obj={
    name,
    email
}
arr.push(obj);
localStorage.setItem('studentData',JSON.stringify(arr));
console.log(arr);

    
// console.log(12345);
}
let studentData=JSON.parse(localStorage.getItem('studentData'))|| [];
console.log(studentData);
