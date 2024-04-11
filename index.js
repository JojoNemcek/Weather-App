const apiKey = "842f1ce91825fd45c1dd321aa07572c2";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(`${apiUrl}&q=${city}&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else{
        var data = await response.json();

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "img/clouds.png"; 
            document.querySelector(".card").style.backgroundImage = "linear-gradient(135deg, #00feba, #5b548a)";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "img/clear.png";
            document.querySelector(".card").style.backgroundImage = "linear-gradient(135deg, #62cff4, #2c67f2)";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "img/rain.png";
            document.querySelector(".card").style.backgroundImage = "linear-gradient(135deg, #9bafd9, #106B82)";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "img/drizzle.png";
            document.querySelector(".card").style.backgroundImage = "linear-gradient(135deg, #ffcb6b, #3d8bff)";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "img/mist.png";
            document.querySelector(".card").style.backgroundImage = "linear-gradient(135deg, #ac8d9a, #87a3a3)";
        }
        else if(data.weather[0].main == "Snow"){
            weatherIcon.src = "img/snow.png";
            document.querySelector(".card").style.backgroundImage = "linear-gradient(135deg, #ebf4f5, #b5c6e0)";
        }

        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";
    }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})