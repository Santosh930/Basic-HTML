// console.log('OMDB');
let container =document.getElementById('container');
let id;
    
   async function searchMovie(name){
    try {
    let api=`https://www.omdbapi.com/?s=${name}&apikey=2a0e5d22`;
    let res=await fetch(api);
    let data=await res.json();
    // console.log(data.Search);
    let result=data.Search;
    return result;
    // console.log(result);
        
    } catch (error) {
        console.log(error);
        
    }
   }
//    searchMovie('avengers');
async function main(){
    try {
    let input=document.getElementById('demo').value;
    let res=  searchMovie(input);
    let data=await res;
    console.log(data);
    displayData(data)
    // console.log(`input:${res} `);
        
    } catch (error) {
        console.log(error);
        
    }
    
}


function displayData(movies){
    try {
    container.innerText=null;
    if(movies==undefined){
        return false;
    }
    movies.forEach(function(el){
        let div=document.createElement('div');
        let img=document.createElement('img');
        img.src=el.Poster;
      let p=document.createElement('p');
      p.innerText=el.Title;
      div.append(img,p)
      container.append(div);

    })
        
    } catch (error) {
        console.log(error);
        
    }

}

function debounce(func,delay){
    clearTimeout(id);
    id=setTimeout(() => {
        func();
        
    }, delay);

}