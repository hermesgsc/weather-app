document.addEventListener('DOMContentLoaded', function () {

    const apiKey = "c05f24e04f9c45b87f7bebdbf885b60f";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?=&units=metric&q=";

    const searchBox = document.querySelector('.search input');
    const searchBtn = document.querySelector('.search button');
    const weatherIcon = document.querySelector('.wheater-icon');

    async function checkWeather(city) {

        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

        if (response.status == 404) {
            document.querySelector('.error').style.display = "block";
            document.querySelector('.weather').style.display = "none";
        } 
        else {
            var data = await response.json();
        
            console.log(data);
    
            document.querySelector('.city').innerHTML = data.name;
            document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
            document.querySelector('.wind').innerHTML = data.wind.speed + " km/h";
    
            if (data.weather[0].main == "Clouds") {
                weatherIcon.src = "./imagens/clouds.png";
            } 
            else if (data.weather[0].main == "Clear") {
                weatherIcon.src = "./imagens/clear.png";
            } 
            else if (data.weather[0].main == "Rain") {
                weatherIcon.src = "./imagens/rain.png";
            } 
            else if (data.weather[0].main == "Drizzle") {
                weatherIcon.src = "./imagens/drizzle.png";
            } 
            else if (data.weather[0].main == "Mist") {
                weatherIcon.src = "./imagens/mist.png";
            }
            else if (data.weather[0].main == "Snow") {
                weatherIcon.src = "./imagens/snow.png";
            }
    
            document.querySelector('.weather').style.display = "block";
            document.querySelector('.error').style.display = "none";
        }
}
    searchBtn.addEventListener('click', () => {
        checkWeather(searchBox.value);
    });
});

