const weatherData = {
    temperature: "101101101.1101",
    humidity: "10010101.01",
    windSpeed: "1101011.001"
};

document.getElementById('temperature').textContent = `${weatherData.temperature} (Binary)`;
document.getElementById('humidity').textContent = `${weatherData.humidity} (Binary)`;
document.getElementById('windSpeed').textContent = `${weatherData.windSpeed} (Binary)`;

