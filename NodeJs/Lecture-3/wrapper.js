(function(exports,module,require,__dirname,__filename){
    var name='Santosh Kumar';
    console.log(name);

})();

console.log(name);


//private data

// IIFE (Immediately Invoked Function Expression)
// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. 

// (function(a,b){
//     console.log(a+b);
// })(20,10);
(function(a,b){
    let result=a+b;
    console.log(result);
})(20,30);

//require
//exports
//