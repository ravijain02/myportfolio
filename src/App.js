import { useState, useEffect } from 'react'
import './App.css'
import Layout from './components/Layout'
import Home from './pages/home'
import About from './pages/about'
import Projects from './pages/projects'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Skills from './pages/skills'

function App() {

  const current_theme = localStorage.getItem('current_theme')
  const [theme, setTheme] = useState( current_theme ? current_theme : 'light')

  useEffect(() => {
    localStorage.setItem('current_theme', theme)
  }, [theme])

  return (
    <BrowserRouter>
      <Layout theme={theme} setTheme={setTheme}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/project' element={<Projects />} />
          <Route path='/skills' element={<Skills />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App;
