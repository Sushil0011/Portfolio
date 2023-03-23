import React from 'react'
import '../styles/footer.css';
import Image from '../assests/foot3.jpg';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineArrowUp } from 'react-icons/ai';
const Footer = () => {
    return (
        <footer>
            <div className='footer'>
                <img src={Image} alt="Founder" />
                <h2>Sushil Tripathi</h2>
                <p>Motivation is temprary, but descipline last forever. </p>
            </div>
            <aside>
            <h2>Social Media</h2>

            <article>
                <a href='https://github.com/Sushil0011' target="/github" >
                    <AiFillGithub />
                </a>
                <a href='https://www.linkedin.com/in/sushil-tripathi-431847218/' target="/Linkdin">
                    <AiFillLinkedin />
                </a>
                <a href='https://www.instagram.com/iam.sushiltiwari/' target="/instagram">
                    <AiFillInstagram />
                </a>
                </article>
                </aside>
<div className='gohome'>
                <a href='#home'  className='tohome'>< AiOutlineArrowUp /></a>
                </div>

        </footer>
    )
}

export default Footer