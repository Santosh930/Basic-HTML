// Class
// class Employee {
//      constructor(fname,lname){
//         this.fname=fname;
//         this.lname=lname;
        
//     }

//     PrintFullName(){
//         console.log(`${this.fname} ${this.lname}`);
//     }
// }


// function Name(name,id){
//     this.name=name;
//     this.id=id;
//     this.fullName=this.fullName;
//     function fullName(){
//         console.log(`${this.name} and ${this.id}`);
//     }
// }

// let name1=new Name('Santosh','')




// let e1= new Employee('Santosh','Kumar');
// let e2= new Employee('Pawan','Sharma');
// let e3= new Employee('Anil','Kumar');
// let e4= new Employee('Sunil','Kumar');
// e1.PrintFullName();
// e2.PrintFullName();
// e3.PrintFullName();
// e4.PrintFullName();



//4 pillar of oops

// 1.Inheritance

// class Car{
//     constructor(name,brand){
//         this.name=name;
//         this.brand=brand;
//         this.wheels=4;
//     }

//     GetSpeed(){
//         console.log(`The speed of ${this.name} is 120km/h`);
//     }
// }

// let c1=new Car('duster','renault');
// let c2=new Car('bolero','mahindra');
// console.log(c1);
// console.log(c2);
// c2.GetSpeed();

// class Sedan extends Car{
//     constructor(name,brand){
//         super(name,brand);
//         this.sunroof=true;
        
//     }
// }

// let s1=new Sedan('Swift Desire','Maruti Suzuki');
// console.log(s1);

// class Electricsedan extends Sedan{
//     constructor(name,brand,value){
//         super(name,brand);
//         this.electric=value;
//     }

// }

// let ES1=new Electricsedan('Verna','Hyundai',true);
// console.log(ES1);


// 2. Encapsulation

// getters and setters method

// class Employee{
//     constructor(){
//         let name;
//         let rating;
//     }
//     getName(){
//         return this.name;

//     }
//     setName(value){
//         this.name=value;

//     }
// }
// let e1=new Employee();
// e1.setName('Santosh');
// console.log(e1.getName());

// 3. Abstraction

// class Employee{
//     constructor(n,r){
//         this.name=n;
//         this.rating=r;
//         this.skills=[];
//     }
//     learnSkills(skill){
//         this.skills.push(skill);
//     }
// }

// let e1=new Employee('Santosh',10);
// e1.learnSkills('oops');
// e1.learnSkills('oops1');
// e1.learnSkills('oops2');
// e1.learnSkills('oops3');
// console.log(e1);
// same thing as
// Employee.prototype.learnSkills=function(){

// }


// 4.  Polymorphism

// class Vehicle{
//     run(){
//         console.log('Vehicle is running');
//     }
// }
// class Car extends Vehicle{
//     run(){
//         console.log(`Car is running`);
//     }
// }
// class Truck extends Vehicle{
//     run(){
//         console.log(`Truck is running`);
//     }
// }

// let v1=new Vehicle();
// let v2=new Car();
// let v3=new Truck();
// v1.run();
// v2.run();
// v3.run();


// parent-Vehicle
// child-Car,Truck


//currying

// function Add(a){
//     return function(b){
//         return function(c){
//             return a+b+c;
//         }

//     }
// }

// let res=Add(2)(3)(5);
// console.log(res);


// function Add(a,b,c){
//     return a+b+c;
// }

// console.log(Add(2,3,5));






