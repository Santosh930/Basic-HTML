const currDate=document.getElementById('date');
const weather=document.getElementById('weather');
const temStatus="Clouds";

const getDay=()=>{
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const currTime=new Date();
    console.log(weekday[currTime.getDay()]);

}
const getCurrTime=()=>{
    const currTime=new Date();
    const month=currTime.getMonth()+1;
    const year=currTime.getFullYear();
    const date=currTime.getDate();
    console.log(month,date,year);
}
// getDay();
getCurrTime();