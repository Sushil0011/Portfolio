import React from 'react'
import { motion } from "framer-motion"
import { BsChevronDown, BsArrowUpRight } from 'react-icons/bs'
import Typewriter from 'typewriter-effect'
import me from "./../assests/profile2.jpg"
import './../styles/home.css'
const Home = () => {







    const animation = {
        h1: {
            initial: {
                x: "-100%",
                opacity: 0,
            },
            whileInView: {
                x: 0,
                opacity: 1,
            },

        },
        button: {
            initial: {
                y: "-100%",
                opacity: 0,
            },
            whileInView: {
                y: 0,
                opacity: 1
            },
        }
    }


    return (
        <div id='home'>

            <section className='section1'>

                <motion.h1   {...animation.h1}>
                    Hi, I Am<br /> <span className='name'>Sushil Tripathi</span>
                </motion.h1>

                <div className='left-container'>
                    <Typewriter options={{
                        strings: ["A Developer", "A Designer "],
                        autoStart: true,
                        loop: true,
                        cursor: "",
                        wrapperClassName: "typewriterpara"
                    }}
                    />
                    <div className='links'>
                        <a className='mail' href='mailto:yashtripathi861@gmail.com'>
                            Hire Me
                        </a>
                        <a className='mail' href='#work'>
                            Projects <BsArrowUpRight />
                        </a>



                    </div>
                    <div className='aside'>
                        <article>
                            <p>
                                3
                            </p>
                            <span>Projects Done</span>


                        </article>


                        <article>
                            <p>
                                Contact
                            </p>
                            <span>
                                yashtripathi861@gmail.com
                            </span>
                        </article>
                    </div>
                </div >

            </section>


            <section className='image'>
                <img src={me} alt="Sushil" />
            </section>
            <BsChevronDown className='arrow' />

        </div>
    )
}

export default Home