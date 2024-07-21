import React from 'react'
import '../styles/skills.css'
import Card from '../components/Card'

const Skills = () => {
  return (
    <div className="skills-container">
      <h2>My Skills</h2>
      <div className="skills-cards">
        <Card>
          <h2>Frontend Technologies</h2>
          <div className="skill">
            <h3>HTML</h3>
            <div className="skill-bar">
              <div className="skill-level html"></div>
            </div>
          </div>
          <div className="skill">
            <h3>CSS</h3>
            <div className="skill-bar">
              <div className="skill-level css"></div>
            </div>
          </div>
          <div className="skill">
            <h3>JavaScript</h3>
            <div className="skill-bar">
              <div className="skill-level javascript"></div>
            </div>
          </div>
          <div className="skill">
            <h3>React</h3>
            <div className="skill-bar">
              <div className="skill-level react"></div>
            </div>
          </div>
        </Card>
        <Card>
          <h2>Backend Technologies</h2>
          <div className="skill">
            <h3>Node.js</h3>
            <div className="skill-bar">
              <div className="skill-level nodejs"></div>
            </div>
          </div>
          <div className="skill">
            <h3>Express</h3>
            <div className="skill-bar">
              <div className="skill-level express"></div>
            </div>
          </div>
          <div className="skill">
            <h3>Python</h3>
            <div className="skill-bar">
              <div className="skill-level python"></div>
            </div>
          </div>
        </Card>
        <Card>
          <h2>Databases</h2>
          <div className="skill">
            <h3>MongoDB</h3>
            <div className="skill-bar">
              <div className="skill-level react"></div>
            </div>
          </div>
          <div className="skill">
            <h3>MySQL</h3>
            <div className="skill-bar">
              <div className="skill-level css"></div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Skills
