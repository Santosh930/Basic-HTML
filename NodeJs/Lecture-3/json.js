
const fs=require('fs');

let obj={
    name:'Santosh Kumar',
    age:31,
    email:'santoshtajpur@gmail.com'
}
// console.log(obj);

let  jsonData=JSON.stringify(obj);
fs.writeFile('json1.json',jsonData,(err)=>{
    console.log(err);
})
let originalData=JSON.parse(jsonData);
// console.log(jsonData.name);//undefined
// console.log(originalData.name);//Santosh Kumar
fs.readFile('json1.json','utf-8',(err,data)=>{
    console.log(jsonData);
    let origData=JSON.parse(data);
    console.log(origData);
})