import React from 'react'
import '../styles/about.css'
import { motion } from "framer-motion"
import { AiFillIeCircle } from 'react-icons/ai'
import AboutSkill from './AboutSkill'

const About = () => {
    return (

        <div id='about'>
            <h1>About</h1>
            <div className='about_container'>
            <h2>Profile</h2>
                <div className='info'>

                  
                      <p  style={{wordSpacing:"5px"}}>Hi, I'm Sushil Tripathi, I have completed gradution from Makhanlala Chadurvedi University
                        in 2022 with a degree in Bachelor of Computer Application.My intersts are in Frontend
                        Engineering, and i love to create beautiful and performant products with delightful
                        user experiences.
                        I consider myself a responsible and orderly person .
                        <p>I am looking forword for my first work experience.</p>
                    </p>


                </div>

                <div className="skill-container">
                    <AboutSkill skill="Html" counter={85} />
                    
                    <AboutSkill skill="Css" counter={80} />
                    <AboutSkill skill="Javascript" counter={65} />
                    <AboutSkill skill="React Js" counter={70} />
                    <AboutSkill skill="Bootstrap" counter={75} />

                    
                    
                    

                </div>
            </div>
        </div>
    )
}

const Skill_bar = () => {

}

export default About