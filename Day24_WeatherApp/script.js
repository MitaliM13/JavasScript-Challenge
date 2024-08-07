document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('search-btn')

    button.addEventListener('click', () => {
        const city = document.getElementById('input-box').value.trim()

        if(city){
            const weatherAPI = `https://goweather.herokuapp.com/weather/${city}`;
            
            fetch(weatherAPI)
                .then(response => {
                    if(!response.ok){
                        throw new Error(`Error fetching the data ${response.status} ${response.statusText}`)
                    }
                    return response.json()
                })
                .then(data => {
                    const para = document.getElementById('data')
                    para.innerHTML = ''

                    const card = document.createElement('div')
                    card.className = 'card'

                    const cityName = document.createElement('h2');
                    cityName.textContent = `Weather in ${city}`;
                    card.appendChild(cityName);

                    const temp = document.createElement('p');
                    temp.textContent = `Temperature: ${data.temperature}`;
                    card.appendChild(temp);

                    const wind = document.createElement('p');
                    wind.textContent = `Wind speed: ${data.wind}`;
                    card.appendChild(wind);

                    const describe = document.createElement('p');
                    describe.textContent = `Weather description: ${data.description}`;
                    card.appendChild(describe);

                    const forecastTitle = document.createElement('h3')
                    forecastTitle.textContent = `Daily Weather Forecast`
                    card.appendChild(forecastTitle)

                    data.forecast.forEach((day, index) => {
                        const forecast = document.createElement('p')
                        forecast.textContent = `Day ${index + 1} - Temperature: ${day.temperature}, Wind: ${day.wind}`
                        card.appendChild(forecast)
                    })

                    para.appendChild(card);
                })
                .catch(err => {
                    console.error(`Error` ,err);
                })
        }
        else {
            alert('Enter a city name')
        }
    })
})