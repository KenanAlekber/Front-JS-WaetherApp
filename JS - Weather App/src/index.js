// let search = document.querySelector(".search");
// let btn = document.querySelector(".btn");

// async function getData(url) {
//     try {
//         let data = await fetch(url);
//         return data.json();
//     } catch {
//         alert("Error");
//     }
// }



// fetch("https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}")

// =======================================================


// let container = document.querySelector(".container");
// let card = document.querySelector(".card");
// let weather = document.querySelector(".weather");
// let details = document.querySelector(".details")
// let searchInput = document.querySelector(".input");
// let btn = document.querySelector(".btn");


// btn.addEventListener("click", () => {

//     const APIKey = "ba725ae303d31716434917c55f0a4699";
//     const city = document.querySelector(".input")

//     if (city === "")
//         return;


//     fetch("https://api.openweathermap.org/data/2.5/weather?lat=40.40&lon=49.86&appid=25e6b15217a429db2159a5489522b44d")
//         .then(response => response.json())
//         .then(json => {

//         })

// })

// ================================================================


// async function checkWeather() {

// }

// fetch("https://api.openweathermap.org/data/2.5/weather?lat=40.40&lon=49.86&appid=25e6b15217a429db2159a5489522b44d")
//     .then(response => response.json())
//     .then(data => { console.log(data) })

// async function checkWeather() {
//     const response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=40.40&lon=49.86&appid=25e6b15217a429db2159a5489522b44d");
//     var data = await response.json();
//     document.getElementsByClassName('heading')[0].innerHTML = data.name;
//     document.getElementsByClassName('temperature')[0].innerHTML = data.main.temp;
//     document.getElementsByClassName('weather')[0].innerHTML = data.weather[0].main;
//     document.getElementsByClassName('icon')[0].innerHTML = data.weather[0].icon;
// }

// checkWeather()