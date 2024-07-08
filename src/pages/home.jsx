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
            <h3>And I'am passionate <span className='profession'>Full Stack Developer</span></h3>
            <p>
              with 2 years of experience in creating efficient, user-friendly web applications. 
              Proficient in <span className='profession'>HTML, CSS, JavaScript, React.js, Node.js, Express and MongoDB</span>.
            </p>
            <p> I specialize in developing robust and responsive web solutions.
              Explore my portfolio to see a variety of projects that showcase my skills in both front-end and back-end development. 
              my work reflects my dedication to quality and performance.
            </p>
            <button className='downloadbtn'>Download Resume</button>
        </div>
    </div>
  )
}

export default Home
