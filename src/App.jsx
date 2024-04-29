import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

function App() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch(`https://studioghibliapi-d6fc8.web.app/films`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setFilms(data);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  return (
    <>
      <h1>List of Ghibli Films</h1>
      <p>Created By: Nawaf Alshalan</p>
      <ul>
        {films.map((film) =>{
          return <li key={film.id}>
            <div className="movie-left">
              <h2>{film.title}</h2>
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
    </>
  )
}

export default App
