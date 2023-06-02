const apiKey = "ba725ae303d31716434917c55f0a4699";
const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const img = document.querySelector(".weather-icon");


async function checkWeather(city) {
    let apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=56b25a787f6f4e4e90372918232805&q=${city}&days=7&aqi=no&alerts=no`;

    const response = await fetch(apiUrl + `&appid=${apiKey}`);

    if (response.ok) {
        var data = await response.json();
        document.querySelector('.city').innerHTML = data.location.name;
        document.querySelector('.temp').innerHTML = data.current.temp_c + "°C";
        document.querySelector('.humidity').innerHTML = data.current.humidity + "%";
        document.querySelector('.wind').innerHTML = data.current.wind_kph + "km/h";


        if (data.current.condition.text === "Sunny") {
            img.src = "../public/images/sunny.png"
        }
        else if (data.current.condition.text === "Clouds") {
            img.src = "../public/images/clouds.png"
        }
        else if (data.current.condition.text === "Rainny") {
            img.src = "../public/images/rainny.png"
        }
        else if (data.current.condition.text === "Drizzle") {
            img.src = "../public/images/drizzle.png"
        }
        else if (data.current.condition.text === "Clear") {
            img.src = "../public/images/clear.webp"
        }
        else if (data.current.condition.text === "Snowly") {
            img.src = "../public/images/snowly.jpg"
        } else {
            img.src = data.current.condition.icon
        }
    }
    else {
        alert("Wrong Location !!!")
    }
}

btn.addEventListener("click", () => {
    checkWeather(input.value);
});