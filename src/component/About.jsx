import React from 'react'
import '../styles/about.css'
import AboutSkill from './AboutSkill'

const About = () => {
    return (

        <div id='about'>
            <h1>About</h1>
            <div className='about_container'>
                <h2>Profile</h2>
                <div className='info'>


                    <p style={{ wordSpacing: "5px" }}>Hi, my name is Sushil Tripathi, I have completed gradution from Makhanlala Chadurvedi University
                        in 2022 with a degree in Bachelor of Computer Application.My intersts are in Frontend
                        Engineering, and i love to create beautiful and performant products with delightful
                        user experiences.
                        Ability to create innovative, creative, & interactive web designs to
                        boost customer engagement. Sound knowledge in HTML5, CSS3,
                        React.js, Next.js, & other UI frameworks. Build reusable code for future use
                        while optimizing web performance.

                      
                    </p>

                    <p style={{marginTop:"2rem"}}> Ability to translate
                            business requirements into technical solutions. Looking to start the
                            career as an entry-level software engineer with a reputed firm driven
                            by technology.</p>

                </div>

                <div className="skill-container">
                    <AboutSkill skill="Html" counter={85} />

                    <AboutSkill skill="Css" counter={80} />
                    <AboutSkill skill="Javascript" counter={80} />
                    <AboutSkill skill="React Js" counter={90} />
                    <AboutSkill skill="Next.js" counter={80} />

                    <AboutSkill skill="Bootstrap" counter={75} />


                </div>
            </div>
        </div>
    )
}


export default About