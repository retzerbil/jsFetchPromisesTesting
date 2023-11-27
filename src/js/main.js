
import { Movie } from './modules/movie';
import './scss/style.scss';

// api key 6424148a
const apiKey = "http://www.omdbapi.com/?i=tt3896198&apikey=6424148a&s=matrix";
const app = document.getElementById("app");

fetch(apiKey)
  .then((response) => response.json())
  .then((movies) => {
   //before mapping
    for (let i = 0; i < movies.Search.length; i++) {
      const htmlMovieBefore = document.createElement("section");
      htmlMovieBefore.innerHTML = movies.Search[i].Title + movies.Search[i].Year;
      app.appendChild(htmlMovieBefore);
    }
   createHTML(movies.Search);

  
  });

const createHTML = (movies) => {
  //mapping and printing :)
  for (let i = 0; i < movies.length; i++) {
    const movieList = movies.map((value) => new Movie(value.Title, value.Year));
    const htmlMovie = document.createElement("section");
    htmlMovie.innerHTML = movieList[i].title + " " + movieList[i].year;
    app.appendChild(htmlMovie);
  }

}