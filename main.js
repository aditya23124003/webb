      
      
      const apikey = "f8b372ea7fa00eda1d0c6514c74ba962";
      apiURL =
        `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;
      const weatherIcon = document.querySelector("#weather-icon");



      async function checkWeather()
      {
        city = document.getElementById("city-search").value;
        console.log(city);
        const response = await fetch(apiURL+document.getElementById("city-search").value+`&appid=${apikey}`)
        var data = await response.json();
        console.log(data);

          console.log(data);


          document.querySelector("#weather-description").innerHTML= data.weather[0].description;
          document.querySelector("#city").innerHTML = document.getElementById("city-search").value;
          document.querySelector("#temp").innerHTML="  "+ Math.round(data.main.temp)+"°"+"c".sup();
          document.querySelector("#feels-like").innerHTML =Math.round (data.main.feels_like)+"°"+"c".sup();
          document.querySelector("#max-temp").innerHTML = (data.main.temp_max)+"°"+"c".sup();
          document.querySelector("#min-temp").innerHTML = (data.main.temp_min)+"°"+"c".sup();
          document.querySelector("#HUMIDITY").innerHTML = (data.main.humidity)+"%";
          document.querySelector("#PRESSURE").innerHTML = (data.main.pressure)+" hPa";
          document.querySelector("#wind-speed").innerHTML = (data.wind.speed)+` miles/hr`;

          if(data.weather[0].main=="Clear")
          document.getElementById("weather-icon").src='images/clear.png';

          if(data.weather[0].main=="Clouds")
          document.getElementById("weather-icon").src='images/clouds.png';

          if(data.weather[0].main=="Drizzle")
          document.getElementById("weather-icon").src='images/drizzle.png';

          if(data.weather[0].main=="Humidity")
          document.getElementById("weather-icon").src='images/humidity.png';
        
          if(data.weather[0].main=="Mist"||data.weather[0].main=="Haze")
          document.getElementById("weather-icon").src='images/mist.png';

          if(data.weather[0].main=="Rain")
          document.getElementById("weather-icon").src='images/rain.png';

          if(data.weather[0].main=="Snow")
          document.getElementById("weather-icon").src='images/snow.png';

          if(data.weather[0].main=="Wind")
          document.getElementById("weather-icon").src='images/wind.png';
          const timeZone =data.timezone;
          const sunriseUnix = data.sys.sunrise+timeZone;
          const sunsetUnix = data.sys.sunset+timeZone;

function showSunTimes(sunriseUnix, sunsetUnix, timeZone) 
{
    document.querySelector("#sunrise").innerHTML=( new Date(sunriseUnix * 1000).toLocaleString('default',{ timeZone })).slice(12,17);
    document.querySelector("#sunset").innerHTML=( new Date(sunsetUnix * 1000).toLocaleString('default', { timeZone })).slice(12,17);
    document.querySelector("#date").innerHTML =( new Date(sunriseUnix * 1000).toLocaleString('default',{ timeZone })).slice(0,10);
    
}

showSunTimes(sunriseUnix, sunsetUnix,"UTC" );

         


}



    