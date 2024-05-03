import { BrowserRouter, NavLink, Routes, Route} from 'react-router-dom'
import { HomePage, FilmsPage, SingleFilmPage } from './components/pages/index';
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li><NavLink to="/" className={({isActive}) => (isActive) ? "activeLink":""}>Home</NavLink></li>
          <li><NavLink to="/films" className={({isActive}) => (isActive) ? "activeLink":""}>Films</NavLink></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/films' element={<FilmsPage />} />
        <Route path='films/film/:id' element={<SingleFilmPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
