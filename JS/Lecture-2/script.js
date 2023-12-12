

//if 


// function sum(){
//     let number=20;
//     if(number==10){
//         document.write('Number is equal to 10');
//     }
//     else if(number==12){
//         document.write('Number is equal to 20');
//     }
//     else if(number==16){
//         document.write('Number is equal to 16');
//     }
//     else{
//         document.write('Not Match any number');
//     }
// }
// sum();

//Switch Case

// function Multiply(){
//     let x=20;

    
//     switch(x){
//         case 10: 
//         console.log('The number is equal to 10 ');
//         break;
//         case 20: 
//         console.log("The number is equal to 20");
//         break;
//         default:
//             console.log("The code inside in default block;");
//     }

// }
// Multiply();

/*
for (initialization; condition; increment)  
{  
    code to be executed  
}  

*/

// let sum=0;
// for(let i=10;i>0;i--){
//     console.log(i);
// }


//while loop



// let i=10;
// while(i>0){
//     console.log(i);
//     i--;
//  }


// let i=1;
// while(i<=10){
//     console.log(i);
//     i++;
// }


let obj={
    name:"Santosh",
    home:"Bihar",
    mob:9873481283,
}

// console.log(obj["name"]);
// console.log(obj.name);

// for(const key in obj){
//     console.log(obj[key]);
// }



//function declartion

function Santosh(name,home,mob,city){
    // console.log(name,home,city,mob);
    return name;
}

// function call

var ans=Santosh("Santosh","Bihar",9873481283,"Samastipur");
console.log(ans);
