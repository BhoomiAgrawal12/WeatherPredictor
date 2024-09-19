const apikey="c639ccc252b7268a1e312035a0d3d7ed";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox=document.querySelector(".container input");
const one=document.querySelector(".container button");
const weathericon=document.querySelector(".src");
async function checkweather(city){
    const response = await fetch(apiUrl+ city + `&appid=${apikey}`);
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".helo").style.display="none";
    }
    else{

   
    var data=await response.json();
    
    document.querySelector(".nam").innerHTML=data.name;
    document.querySelector(".win").innerHTML=data.wind.speed + "km/h";
    document.querySelector(".humi").innerHTML=data.main.humidity +"%";
    document.querySelector(".tem").innerHTML=Math.floor(data.main.temp) + "°C";
    document.querySelector(".cond").innerHTML=data.weather[0].main;

if(data.weather[0].main=="Clouds"){
    weathericon.src="images/clouds.png";
}
else if(data.weather[0].main=="Clear"){
    weathericon.src="images/clear.png";
}
else if(data.weather[0].main=="Drizzle"){
    weathericon.src="images/drizzle.png";
}
else if(data.weather[0].main=="Mist"){
    weathericon.src="images/mist.png";
}
else if(data.weather[0].main=="Rain"){
    weathericon.src="images/rain.png";
}
else if(data.weather[0].main=="Snow"){
    weathericon.src="images/snow.png";
}

document.querySelector(".helo").style.display="flex";
document.querySelector(".error").style.display="none";
}
} 

one.addEventListener("click",()=>{
    checkweather(searchbox.value);
})
