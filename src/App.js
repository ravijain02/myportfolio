import { useState, useEffect } from 'react';
import './App.css'
import Header from './components/Header';
import Home from './pages/home';
import About from './pages/about';

function App() {

  const current_theme = localStorage.getItem('current_theme')
  const [theme, setTheme] = useState( current_theme ? current_theme : 'light')

  useEffect(() => {
    localStorage.setItem('current_theme', theme)
  }, [theme])

  return (
      <div className={`container ${theme}`}>
        <Header theme={theme} setTheme={setTheme} />
        <Home theme={theme} setTheme={setTheme} />
        <About theme={theme} setTheme={setTheme} />
      </div>
  );
}

export default App;
