// console.log("DOM");

/*

1.getAttribute(atrr);//To get the attribute value;
2.setAttribute(attr,value);//To set the attribute //node.classList.add("newClass");
3.node.style
4.node.append(el)//adds the el from end of node(inside);
5.node.prepend(el)//adds the el from start of node(inside);
6.node.before(el)//adds the el befor of the node(outside);
7.node.after(el)//adds the el after of the node(outside);
8.node.remove()//removes the node
9.document.createElement("el")//for create the el.
10.node.addEventListener(event,callbackfun);
11.node.removeEventListener(event,callback);


*/

// let box=document.getElementById('box');
// console.log(box);
// console.log(box.getAttribute('id'));
// box.setAttribute('class','newClass');

// let para=document.getElementsByTagName('p');
// console.log(para[0]);
// para[0].setAttribute('class','para');


//style

// let box=document.getElementById('box');
// box.style.color='red';
// box.style.backgroundColor='green';
// box.style.fontSize='50px';
// box.style.color='red';
// box.style.color='red';
// box.style.color='red';

// let para=document.getElementsByTagName('p');
// para[0].style.backgroundColor='pink';


//for creating element

let btn=document.createElement('button');
let p=document.createElement('p');
let h2=document.createElement('h2');
let div=document.createElement('div');
let li=document.createElement('li');
li.innerText='Santosh';
btn.innerText='click me!';

let box=document.getElementById('box');
// box.append(li);
// box.prepend(btn);
// box.before(btn);
// box.after(li);

box.remove('p');

console.log(btn);
console.log(p);
console.log(h2);
console.log(div);
console.log(li);
console.log(btn);
