// Your code here

//function to display first movie

function displayFirstMovie(film){
    let posterImage = document.getElementById('poster')
    posterImage.src = "https://www.gstatic.com/tv/thumb/v22vodart/2157/p2157_v_v8_ab.jpg"

    let gilaTitle = document.getElementById('title')
    gilaTitle.textContent = "The Giant Gila Monster"

    let gilaRunTime = document.getElementById('runtime')
    gilaRunTime.textContent = "108 minutes"

    let gilaShowTime = document.getElementById('showtime')
    gilaShowTime.textContent = "04:00PM"

    let gilaDescription = document.getElementById('film-info')
    gilaDescription.textContent = 'A giant lizard terrorizes a rural Texas community and a heroic teenager attempts to destroy the creature.'

    let gilaAvailable = document.getElementById('ticket-num')
    gilaAvailable.textContent = '3'
    

    //add event listener for buy button

document.getElementById('buy-ticket').addEventListener('click', () => updateTickets(gilaAvailable))
}


//add function to update tickets

function updateTickets(gilaAvailable){
    if (gilaAvailable.textContent === '3'){
    gilaAvailable.textContent = '2'
}
else if (gilaAvailable.textContent === '2'){
    gilaAvailable.textContent = '1'
}
else if(gilaAvailable.textContent === '1'){
    gilaAvailable.textContent = '0'
}
}

//function to displaymovie titles

function addMovieTitles(film){
    const movieList  = document.getElementById('films')
    let movieTitle = document.createElement('li')
    movieTitle.innerHTML = `<li>${film.title}</li>`

    movieList.appendChild(movieTitle)
}

// first fetch to pullmovie #1onto the page

function getFirstMovie(film){
    fetch('http://localhost:3000/films/1')
    .then(res => res.json())
    .then(displayFirstMovie(film))
}

//second fetch to display movie titles
function getAllMovies(){
    fetch('http://localhost:3000/films')
    .then(res => res.json())
    .then(films => films.forEach(film => addMovieTitles(film)))
}








function initialize(){
    getFirstMovie();
    getAllMovies();
};

initialize();