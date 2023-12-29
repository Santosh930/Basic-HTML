// console.log("Lecture-13");

/* 
1.postman.com()

*/

// let api="https://reqres.in/api/users?page=2";

// console.log(fetch(api));//promise

// 1st method
// fetch(api)
// .then(function(res){
//     res.json().then(function(res){
//         console.log(res.data);
//     });
// }).catch(function(err){
//     console.log(err);
// })

//2nd method

// async function getData(){
//     let res=await fetch(api);
//     let data=await res.json();
//     console.log(data.data);
// }

// getData();


    // async function getWeatherData(){
    //     let city=document.getElementById('city').value;
    //     // console.log(city);
    //     let API_KEY="32296e26892aa5be2567f0364a0a57a4";
    
    // let weatherApi=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    //     let res=await fetch(weatherApi);
    //     let data=await res.json();
    //     displayData(data);
    //     console.log(data);
    
    // }
    // getWeatherData();

    // function displayData(data){
    //     let container =document.getElementById('box');
    //     container.innerText=null;
        
    //     let city=document.createElement('p');
    //     city.innerText=`city: ${data.name}`;
    //     let minTemp=document.createElement('p');
    //     minTemp.innerText=`Min temp: ${data.main.temp_min}`;
    //     let maxTemp=document.createElement('p');
    //     maxTemp.innerText=`Max temp: ${data.main.temp_max}`;
    //     let currentTemp=document.createElement('p');
    //     currentTemp.innerText=`Current temp: ${data.main.temp}`;
    //     let map=document.getElementById('mapId');
    //     map.src=`https://www.google.com/maps/embed/v1/place?q=${data.name}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`
    //     container.append(city,currentTemp,maxTemp,minTemp);


    // }

    //using another api using lat and long
    // https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
    // async function getCurrentLocation(lat,long){
    //     let API_KEY="32296e26892aa5be2567f0364a0a57a4";
    //     let locationAPI=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}`;
    //     let res=await fetch(locationAPI);
    //     let data=await res.json();
    //     displayData(data);
    //     console.log(data);

    // }
    
//     function getWeather(){
//     navigator.geolocation.getCurrentPosition(success);   
//     function success(position){
//         const crd = position.coords;
//         getCurrentLocation(`${crd.latitude}`,`${crd.longitude}`)

//   console.log("Your current position is:");
//   console.log(`Latitude : ${crd.latitude}`);
//   console.log(`Longitude: ${crd.longitude}`);
//   console.log(`More or less ${crd.accuracy} meters.`);

//     }

//     }



let arr=[1,2,3,4,5,6,7,8,9,10];
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

   let santosh=arr.map(function(elem,index){

    // console.log(elem);
    // console.log(index);
    return index;

})

let Each=arr.forEach(function(elem,index){
    return elem ;
})
console.log(santosh);
console.log(Each);



    
    
    

