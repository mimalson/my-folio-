import React from 'react'
import "./footer.css"
import {RiFacebookFill} from 'react-icons/ri'
import {BsInstagram} from 'react-icons/bs'
import {IoLogoTwitter} from 'react-icons/io'


const footer = () => {
  return (
    <footer>

      
<div className="love">
        <small>❤️ and ✨ Always, from</small>
      </div>

      <a href="https://linktr.ee/meenahh" className='footer__logo'>
        Muhammed Amina</a>

      <div className="footer__socials">
        <a href="https://facebook.com"><RiFacebookFill /></a>
        <a href="https://twitter.com"><BsInstagram/></a> 
        <a href="https://instagram.com"><IoLogoTwitter/></a> 
      </div>

    </footer>
  )
}

export default footer
