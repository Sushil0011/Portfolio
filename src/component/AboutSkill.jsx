import React from 'react'
import '../styles/skill.css'
const AboutSkill = ({skill,counter}) => {
    
    return (
        <>        
             


<div className='progress'>
    <div className='name'>
    <h2>{skill}</h2>
    </div>

<progress value={counter} max="100"></progress>            
</div>
        </>




    )
}

export default AboutSkill
