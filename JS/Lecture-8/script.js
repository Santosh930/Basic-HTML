// console.log("Lecture-8");

// let box=document.getElementById('box');
// console.log(box.outerHTML);
// console.log(box.outerText);
// console.log(box.innerHTML);
// console.log(box.innerText);
// console.log(box.textContent);

// let name=document.getElementById('name');
// console.log(name.value);

// let para=document.getElementById('para');
// para.innerHTML="<li>Mango</li>";
// para.innerText="<li>Mango</li>";

//querySelector

// let santosh=document.querySelector(".santosh");
// let santosh1=document.querySelectorAll(".santosh");
// console.log(santosh);
// console.log(santosh1);

// let para1 =document.querySelector("#para-1");
// let para =document.querySelectorAll("#para-1");
// console.log(para);
// console.log(para1);
let btn=document.getElementById('btn');
// var number=1;
    
// btn.onclick=()=>{
    
    
    
//     let box=document.querySelectorAll('#counter');
    
        
    
//     box[0].innerText="onClick";
     
//     // number++;
    
    
//     }
    btn.ondblclick=(e)=>{
        let box=document.querySelectorAll('#counter');
        box[0].innerText="dubble Click";
        console.log(e);

    }


    // btn.addEventListener(onClick,onClick);
    // function onClick(e){
    //     let box=document.querySelectorAll('#counter');
    //     box[0].innerText="onClick";
    //     console.log(e);

    // }
    // function onDubbleClick(){
    //     let box=document.querySelectorAll('#counter');
    //     box[0].innerText="onDubbleClick";

    // }
// function myFunction(){



//     alert("Welcome to JavaTpoint");
// }



// function Dec(){
//     let box=document.querySelectorAll('#counter');
//     box[0].innerText=number;
//     number--;

// }
// function reset(){
    
// }
