const API_KEY = "183d3467020a49de04b34eae73d73d0a";

function getWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => console.log("Weather Data:", data))
        .catch(error => console.error("Error fetching weather data:", error));
}

export { getWeather };
