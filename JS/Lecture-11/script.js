console.log("Lecture-11");

// 
let api="https://fakestoreapi.com/products";

let getdata= async()=>{
    let res= await fetch(api);
    let data= await res.json();
    console.log(data);
    displayData(data);
    
}

getdata();

// let arr=[1,2,3,4,5,6,7,8,9,10];
function displayData(arr){
    let container=document.getElementById('container');
    // console.log(container);
    arr.map((elem)=>{
        let div=document.createElement('div');
        let image=document.createElement('img');
        let p=document.createElement('p');
        let h1=document.createElement('h1');
        p.innerText=elem.description;
        h1.innerText=elem.category;
        image.src=elem.image;
        div.append(image,h1,p);
        container.append(div);

        // console.log(elem);
        // console.log(i);

    })
   

}





// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("foo");
//     }, 300);
//   });
  
//   myPromise
//     .then(handleFulfilledA, handleRejectedA)
//     .then(handleFulfilledB, handleRejectedB)
//     .then(handleFulfilledC, handleRejectedC);
  
    
       
    //   });

    //   console.log(promiseA);