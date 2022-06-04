import React from 'react'
import "./nav.css"
import {BiHomeSmile} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import {FiAward} from 'react-icons/fi'
import {MdComputer} from 'react-icons/md'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {useState} from 'react'

const Nav = () => {
  const[activeNav, setactiveNav] = useState('#')
  return (
    <nav>
      <a href="#header" onClick= {() => setactiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BiHomeSmile/></a>
      <a href="#about" onClick= {() => setactiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} ><AiOutlineUser/></a> 
      <a href="#experience" onClick= {() => setactiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FiAward/></a>
      <a href="#portfolio" onClick= {() => setactiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><MdComputer/></a>
      <a href="#contact" onClick= {() => setactiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav