const API_KEY = '198dfefb8c63c5bec9e8fce101aabef4';

async function searchMovie() {
    const title = document.getElementById('movie-title').value;
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(title)}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        if (data.results && data.results.length > 0) {
            displayMovieList(data.results);
        } else {
            document.getElementById('movie-details').innerHTML = 'No results found';
        }
    } catch (error) {
        document.getElementById('movie-details').innerHTML = 'Error fetching movie data';
        console.error('There was an error:', error);
    }
}

function displayMovieList(movies) {
    const movieDetails = movies.map(movie => `
        <div class="movie">
            <h2>${movie.title}</h2>
            <img class="movie-poster" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
            <p><strong>Release Date:</strong> ${movie.release_date}</p>
            <button onclick="fetchMoreInfo(${movie.id})">More Info</button>
        </div>
    `).join('');
    
    document.getElementById('movie-details').innerHTML = movieDetails;
}

async function fetchMoreInfo(movieId) {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&append_to_response=credits`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const movie = await response.json();

        const movieInfo = `
            <h2>${movie.title}</h2>
            <img class="movie-poster" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
            <p><strong>Release Date:</strong> ${movie.release_date}</p>
            <p><strong>Overview:</strong> ${movie.overview}</p>
            <p><strong>Director:</strong> ${movie.credits.crew.find(crew => crew.job === 'Director').name}</p>
            <p><strong>Actors:</strong> ${movie.credits.cast.slice(0, 5).map(actor => actor.name).join(', ')}</p>
        `;

        document.getElementById('movie-info').innerHTML = movieInfo;
        document.getElementById('movieModal').style.display = 'block';
    } catch (error) {
        document.getElementById('movie-info').innerHTML = 'Error fetching detailed movie data';
        console.error('There was an error:', error);
    }
}

function closeModal() {
    document.getElementById('movieModal').style.display = 'none';
}
