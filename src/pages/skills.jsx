import React from 'react'
import '../styles/skills.css'
import Card from '../components/Card'
import Htmllogo from '../assets/HTML5_logo.png'
import Csslogo from '../assets/CSS3_logo.png'
import Bootsraplogo from '../assets/bootstrap.png'
import Tailwindlogo from '../assets/tailwindcss.png'
import JSlogo from '../assets/Javascript.png'
import Reactlogo from '../assets/reactjs_.png'
import Nextjslogo from '../assets/nextjslogo.png'
import Nodelogo from '../assets/nodejs.png'
import Expresslogo from '../assets/express.png'
import Pythonlogo from '../assets/pythonlogo.png'
import Mongodb from '../assets/mongodblogo.png'

const Skills = () => {
  return (
    <div className="skills-container">
      <h2>My Skills</h2>
      <div className="skills-cards">
        <Card>
          <div className="skill">
            <div className='skill-title'>
              <h3>HTML</h3>
              <img src={Htmllogo} alt='HTML logo' />
            </div>
            <div className="skill-bar">
              <div className="skill-level html"></div>
            </div>
          </div>
        </Card>
        <Card>
          <div className="skill">
            <div className='skill-title'>
              <h3>CSS</h3>
              <img src={Csslogo} alt='CSS logo' />
            </div>
            <div className="skill-bar">
              <div className="skill-level css"></div>
            </div>
          </div>
        </Card>
        <Card>
          <div className="skill">
            <div className='skill-title'>
              <h3>Bootstrap</h3>
              <img src={Bootsraplogo} alt='CSS logo' />
            </div>
            <div className="skill-bar">
              <div className="skill-level css"></div>
            </div>
          </div>
        </Card>
        <Card>
          <div className="skill">
            <div className='skill-title'>
              <h3>Tailwind Css</h3>
              <img src={Tailwindlogo} alt='CSS logo' />
            </div>
            <div className="skill-bar">
              <div className="skill-level css"></div>
            </div>
          </div>
        </Card>
        <Card>
          <div className="skill">
            <div className='skill-title'>
              <h3>JavaScript</h3>
              <img src={JSlogo} alt='JavaScript logo' />
            </div>
            <div className="skill-bar">
              <div className="skill-level javascript"></div>
            </div>
          </div>
        </Card>
        <Card>
          <div className="skill">
            <div className='skill-title'>
              <h3>React</h3>
              <img src={Reactlogo} alt='React logo' />
            </div>
            <div className="skill-bar">
              <div className="skill-level react"></div>
            </div>
          </div>
        </Card>
        <Card>
          <div className="skill">
            <div className='skill-title'>
              <h3>Next JS</h3>
              <img src={Nextjslogo} alt='Nextjs logo' />
            </div>
            <div className="skill-bar">
              <div className="skill-level react"></div>
            </div>
          </div>
        </Card>
        <Card>
          <div className="skill">
            <div className='skill-title'>
              <h3>Node.js</h3>
              <img src={Nodelogo} alt='Node.js logo' />
            </div>
            <div className="skill-bar">
              <div className="skill-level nodejs"></div>
            </div>
          </div>
        </Card>
        <Card>
          <div className="skill">
            <div className='skill-title'>
              <h3>Express</h3>
              <img src={Expresslogo} alt='Express logo' />
            </div>
            <div className="skill-bar">
              <div className="skill-level express"></div>
            </div>
          </div>
        </Card>
        <Card>
          <div className="skill">
            <div className='skill-title'>
              <h3>Python</h3>
              <img src={Pythonlogo} alt='Python logo' />
            </div>
            <div className="skill-bar">
              <div className="skill-level python"></div>
            </div>
          </div>
        </Card>
        <Card>
          <div className="skill">
            <div className='skill-title'>
              <h3>MongoDB</h3>
              <img src={Mongodb} alt='mongodb logo' />
            </div>
            <div className="skill-bar">
              <div className="skill-level nodejs"></div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Skills
