// Your code here

//function to display first movie

function displayFirstMovie(film){
 

    let posterImage = document.getElementById('poster')
    posterImage.src = `${film.poster}`

    let gilaTitle = document.getElementById('title')
    gilaTitle.textContent = `${film.title}`

    let gilaRunTime = document.getElementById('runtime')
    gilaRunTime.textContent = `${film.runtime}`

    let gilaShowTime = document.getElementById('showtime')
    gilaShowTime.textContent = `${film.showtime}`

    let gilaDescription = document.getElementById('film-info')
    gilaDescription.textContent = `${film.description}`

    let gilaAvailable = document.getElementById('ticket-num')
    gilaAvailable.textContent = `${film.capacity - film.tickets_sold}`
    

    //add event listener for buy button

document.getElementById('buy-ticket').addEventListener('click', () => updateTickets(film))
}


//add function to update tickets

function updateTickets(film){
    if(film.tickets_sold < 30){
        film.tickets_sold+= 1
        document.getElementById('ticket-num').textContent = `${film.capacity - film.tickets_sold}`
    }
}

// function updateTickets(gilaAvailable){
//     if (gilaAvailable.textContent === '3'){
//     gilaAvailable.textContent = '2'
// }
// else if (gilaAvailable.textContent === '2'){
//     gilaAvailable.textContent = '1'
// }
// else if(gilaAvailable.textContent === '1'){
//     gilaAvailable.textContent = '0'
// }
// }

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
    .then(film => displayFirstMovie(film))
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