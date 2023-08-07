import {Routes,Route,BrowserRouter as Router, Navigate} from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import Header from './components/Header/Header'
import Login from './pages/Login/Login'
import Noticias from './pages/Noticias/Noticias'
import { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'
import { AuthContext } from './context/AuthContext'

function App() {
 

  const {theme} = useContext(ThemeContext);
  const {isLoggedIn} = useContext (AuthContext);


  return (
    <div className={theme === 'light' ? 'App' : 'App dark-theme'}>
      <Router>
        {isLoggedIn && <Header/>}
        <Routes>
        <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
          <Route path="/login" element={!isLoggedIn ? <Login />: <Navigate to="/home" />} />
          <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />
          <Route path="/noticias" element={isLoggedIn ? <Noticias /> : <Navigate to="/login" />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

