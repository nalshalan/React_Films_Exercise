import { useState, useEffect } from 'react'
import { filterFilmsByDirector, getListOf, getFilmStats } from '../Helpers/FilmHelpers/filmHelpers';
import { Link } from 'react-router-dom'
import './filmsPage.css'

function FilmsPage() {
  const [films, setFilms] = useState([]);
  const [searchDirector, setSearchDirector] = useState("");

  useEffect(() => {
    fetch(`https://studioghibliapi-d6fc8.web.app/films`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setFilms(data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  // Derived State - Some data that comes from using state variables
  const filteredFilms = filterFilmsByDirector(films, searchDirector);
  // Getting all of the unique director names, so we can use them as options for the dropdown menu
  const allDirectors = getListOf(films, "director");
// Displaying film score, latest film and total films for the filtered list of films
  const { avg_score, total, latest } = getFilmStats(filteredFilms);

  return (
    <>
      <h1>Studio Ghibli Films</h1>
      <p>Created By: Nawaf Alshalan</p>
      <form>
        <div className="form-group">
          <label htmlFor="searchDirector">Filter Movies By Director</label>
          <select 
            value={searchDirector}
            name="searchDirector"
            id="searchDirector"
            onChange={(event) => {
              setSearchDirector(event.target.value);
            }}
          >
              <option value="">All</option>
              {allDirectors.map((director, index) => {
                return <option value={director} key={index}>{director}</option>
              })}
          </select>
        </div>
      </form>
      
      <div>
          <ul>
            {filteredFilms.map((film) => {
              return <li key={film.id}className="movie-info">
                <div className="movie-left">
                  <Link to={`film/${film.id}`}>
                    <h2>{film.title}</h2>
                  </Link>
                  <img src={film.image} alt={`${film.title} banner`}/>
                </div>
                <div className="movie-right">
                  <p>{film.description}</p>
                  <p>Running Time: {film.running_time}m - Rotten Tomatoes: {film.rt_score}%</p>
                  <p>Release Year: {film.release_date}</p>
                </div>
              </li>
            })}
          </ul>
      </div>

      <div className="filmStats">
        <div>
          <span># Of Films:</span>
          <span>{total}</span>
        </div>
        <div>
          <span>Average Rating:</span>
          <span>{avg_score.toFixed(2)} %</span>
        </div>
        <div>
          <span>Latest Film:</span>
          <span>{latest}</span>
        </div>
        </div>
    </>
  )
}

export default FilmsPage;