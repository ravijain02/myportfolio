import React from 'react'
import '../styles/skills.css'

const Skills = () => {
  return (
    <div className="skills-container">
      <h2>My Skills</h2>
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
    </div>
  )
}

export default Skills
