document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.getElementById('search-btn');
    const inputBox = document.getElementById('input-box');
    const dataContainer = document.getElementById('data');
    const container = document.querySelector('.container');

    const createCardElement = (tagName, textContent, className = '') => {
        const element = document.createElement(tagName);
        element.textContent = textContent;
        if (className) element.className = className;
        return element;
    };

    const displayWeatherData = (city, data) => {
        dataContainer.innerHTML = '';

        const card = createCardElement('div', '', 'card');
        card.appendChild(createCardElement('h2', `Weather in ${city}`));
        card.appendChild(createCardElement('p', `Temperature: ${data.temperature}`));
        card.appendChild(createCardElement('p', `Wind speed: ${data.wind}`));
        card.appendChild(createCardElement('p', `Weather description: ${data.description}`));

        const forecastTitle = createCardElement('h3', 'Daily Weather Forecast');
        card.appendChild(forecastTitle);

        data.forecast.forEach((day, index) => {
            const forecast = createCardElement('p', `Day ${index + 1} - Temperature: ${day.temperature}, Wind: ${day.wind}`);
            card.appendChild(forecast);
        });

        dataContainer.appendChild(card);
        container.style.height = 'auto';
        container.style.padding = "10px";
    };

    const fetchWeatherData = async (city) => {
        try {
            const response = await fetch(`https://goweather.herokuapp.com/weather/${city}`);
            if (!response.ok) {
                throw new Error(`Error fetching data: ${response.status} ${response.statusText}`);
            }
            const data = await response.json();
            displayWeatherData(city, data);
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to fetch weather data. Please try again.');
        }
    };

    searchBtn.addEventListener('click', () => {
        const city = inputBox.value.trim();
        if (city) {
            fetchWeatherData(city);
        } else {
            alert('Please enter a city name.');
        }
    });
});
