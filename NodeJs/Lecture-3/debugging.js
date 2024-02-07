


three();

console.log(a);//ReferenceError: Cannot access 'a' before initialization
let a=20;

console.log(b);//undefined

var b=30;

function one(){
    return 1;
}

function two(){
    return one()+one();
}


function three(){
    return two()+one();
}




