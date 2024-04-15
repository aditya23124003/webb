
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
          document.querySelector("#temp").innerHTML= Math.round(data.main.temp);
          document.querySelector("#feels-like").innerHTML =Math.round (data.main.feels_like);
          document.querySelector("#max-temp").innerHTML = (data.main.temp_max);
          document.querySelector("#min-temp").innerHTML = (data.main.temp_min);
          document.querySelector("#HUMIDITY").innerHTML = (data.main.humidity);
          document.querySelector("#PRESSURE").innerHTML = (data.main.pressure);
          document.querySelector("#visibility").innerHTML = (data.visibility);

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

          const sunriseUnix = data.sys.sunrise;
          const sunsetUnix = data.sys.sunset;

function showSunTimes(sunriseUnix, sunsetUnix, timeZone) {
    console.log( new Date(sunriseUnix * 1000).toLocaleString('default',{ timeZone }));
    console.log( new Date(sunsetUnix * 1000).toLocaleString('default', { timeZone }));
}

showSunTimes(sunriseUnix, sunsetUnix,UTC );
showSunTimes(sunriseUnix, sunsetUnix, UTC); 
         


      }

    