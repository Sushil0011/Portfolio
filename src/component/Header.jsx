import React from 'react'
import '../styles/header.css'
import image from './../assests/icon1.jpg'
import { AiOutlineMenu } from 'react-icons/ai'
const Header = ({ setMenuopen, menuopen }) => {
    return (
        <>
            <nav>

                <div className='logo'>
                    {/* <h2>Sushil.</h2> */}
                    <img src={image} alt="logo" />
                </div>
                <Navcontent />

            </nav>
            <button
                onClick={() => (
                    setMenuopen(!menuopen)
                )}

                className='menubtn'>

                <AiOutlineMenu />

            </button>
        </>
    )
}
export const Mininav = ({ menuopen, setMenuopen }) => {
    return (
        <div className={`navphone  ${menuopen ? "navphonecomes" : ""}`}>

            <Navcontent setMenuopen={setMenuopen} />
        </div>
    )
};



const Navcontent = ({ setMenuopen }) => {
    return (
        <>




            <div className='menu'>
                <a onClick={() => (
                    setMenuopen(false)
                )} href='#home'>Home</a>
                <a onClick={() => (
                    setMenuopen(false)
                )} href='#about'>About</a>
                <a onClick={() => (
                    setMenuopen(false)
                )} href='#work'>Projects</a>
                <a onClick={() => (
                    setMenuopen(false)
                )} href='#timeline'>Timeline</a>
                <a onClick={() => (
                    setMenuopen(false)
                )} href='#contact'>Contact</a>
            </div>
            <div className='mailbtn'>
                <a className='mail' href='mailto:yashtripathi861@gmail.com'>
                    <button className='btn'>Email</button>
                </a>
            </div>
        </>
    )
}













export default Header;