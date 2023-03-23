import React, { useState } from 'react';
import '../styles/contact.css'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'

import {addDoc,collection} from 'firebase/firestore'
import {db} from '../firebase'
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

const [disablebtn,setDisablebtn]=useState(false)


  const namehandler = (e) => {
    setName(e.target.value)
    // console.log(name)

  }

  const emailhandler = (e) => {
    setEmail(e.target.value)

    // console.log(e.target.value)
  }
  const msghandler = (e) => {
    setMsg(e.target.value)

    // console.log(e.target.value)

  }


  const submithandler = async(event) => {
    event.preventDefault();
    setDisablebtn(true)
  try {
    await addDoc( collection(db,"contacts"),{
      name,email,msg
    });

setName("")
setEmail("")
setMsg("")
    toast.success("Meaasge Sent")
setDisablebtn(false)
  } catch (error) {
    toast.error("Error");
    console.log(error)
    setDisablebtn(false)
  }
   
   
   





  }


  const animation = {
    form: {
      initial: {
        x: "-100%",
        opacity: 0,

      },
      whileInView: {
        x: 0,
        opacity: 1,
      }
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0
      },
      whileInView: {
        y: 0,
        opacity: 1
      },
      transition: {
        delay: 0.5
      }


    },

  }



  return (
    <div id='contact'>
      <section>



        <motion.form onSubmit={submithandler}  {...animation.form}>
          <h2>Contact Me</h2>
          <input type='text'  value={name} onChange={namehandler} placeholder="Name" />
          <input type='email' value={email}  onChange={emailhandler} placeholder="Email" />

          <input type='text'   value={msg}  onChange={msghandler} placeholder="Your message" />
          <motion.button   disabled={disablebtn}  className={disablebtn?"disablebtn":""} {...animation.button} type='submit'>Send</motion.button>

        </motion.form>

      </section>


    </div>
  )
}

export default Contact