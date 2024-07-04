import React from 'react'
import '../styles/home.css'
import Profile from '../assets/profilepicture.png'

function Home() {
  return (
    <div className='d-2'>
        <div className='myphoto'>
            <img src={Profile} alt='myphoto' />
        </div>
        <div className='myinfo'>
            <h2>Hello, It's Me</h2>
            <h1>Ravi Jain</h1>
            <h3>And I'am <span className='profession'>Full Stack Developer</span></h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti error sit, illo dicta fuga doloremque officiis voluptatibus amet commodi! Nemo deserunt corrupti itaque aut tempore, error sit dolore sunt voluptates.</p>
            <button className='downloadbtn'>Download Resume</button>
        </div>
    </div>
  )
}

export default Home
