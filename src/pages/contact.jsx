import React, { useRef, useState } from 'react';
// import emailjs from '@emailjs/browser';
import Alertbox from '../components/Alertbox';
import '../styles/contact.css'

const Contact = () => {
    const form = useRef();
    const [showAlertBox, setShowAlertBox] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');

    const sendEmail = (e) => {
      e.preventDefault()
      setPopupMessage('Message sent successfully!');
      setShowAlertBox(true);
        // emailjs.sendForm('service_k62zt78', 'template_lybhadj', form.current, '4S9QsAt3ns-y74MUD')
        // .then(
        //   () => {
        //     console.log('SUCCESS!');
        //     alert('Message sent successfully!');
        //   },
        //   (error) => {
        //     console.log('FAILED...', error.text);
        //     alert('Failed to send message, please try again.');
        //   },
        // );
    }

return (
    <div className="contact-container">
        <div className="contact-form">
        <h2>Connect with me</h2>
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              name="from_name" 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="from_email"
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="5" 
              required 
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
        </div>
        {showAlertBox && (
        <Alertbox 
          message={popupMessage} 
          onClose={() => setShowAlertBox(false)} 
        />
      )}
    </div>
  )
}

export default Contact
