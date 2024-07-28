import React from 'react'
import '../styles/home.css'
import MERN from '../assets/mern-stack.png'

const About = () => {
  return (
      <div className='aboutme'>
        <h2 className='title'>About Me</h2>
        <div className='d-2'>
            <div className='imgcont'>
              <img src={MERN} alt='' />
            </div>
            <div>
              <p> 
                I am Ravi Kumar Jain, a dedicated and proficient <span>full-stack software developer</span> with approximately <span>2 years of professional experience</span> in both <span>front-end and back-end development</span>. My expertise spans across various technologies including <span>HTML, CSS, JavaScript, React.js, Node.js, Express, and MongoDB</span>
              </p>
              <div>
                <h3 className='title'>Academic Qualification</h3>
                <div className='education-list'>
                  <div className=''>M.Sc. (IT) - Govt. N.P.G. College of Science, Raipur, Year 2020, Secured 70%</div>
                  <div className='education'>B.Sc. (CS) - Central College of IT Raipur, University PTRSU, Year 2018, Secured 60%</div>
                  <div className='education'>High School (10+2) - Govt. Rashtriya H. S. School, Raipur, Year 2015, Secured 68%</div>
                  <div className='education'>High School (10) - Govt. H. S. School, Ahaar, Tikamgarh, Year 2013, Secured 70%</div>
                </div>
              </div>
            </div>
        </div>
      </div>
  )
}

export default About