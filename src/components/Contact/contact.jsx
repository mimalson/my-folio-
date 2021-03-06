import React from 'react'
import "./contact.css"
import {MdOutlineEmail} from 'react-icons/md'
import {FaTwitter} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'
// import {useRef} from 'react'
// import emailjs from 'emailjs-com'


const contact = () => {
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_mpv6dbd', 'template_5fib9vj', form.current, 'YOUR_USER_ID')
  // }

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Sold Already?</h2>

      <div className="container contact__container">
        
      <p className='sold'> I'm currently looking for new opportunities, 
        so my inbox is always open. Have a question or you 
        just want to say hi? feel free to reach out to me
      </p>
      
        <div className="contact__options">
          <article className="contact__option">
            <a href="mailto:muhaminat01@gmail.com">
            <MdOutlineEmail className='contact__option-icon' />
            </a>
          </article>

          <article className="contact__option">
            <a href="https://twitter.com/simply_meenat" target='_blank' rel="noreferrer" >
            <FaTwitter className='contact__option-icon'/>
            </a>
          </article>

          <article className="contact__option">
            <a href="http://api.whatsapp.com/send?phone+2348142974615" target='_blank' rel="noreferrer">
            <BsWhatsapp className='contact__option-icon'/>
            </a>
          </article>
        </div>
      </div>
    </section>
  )
}


export default contact
