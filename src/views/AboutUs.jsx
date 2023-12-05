import React, { useState } from 'react';
import axios from 'axios';
import Header from "../components/Header/Header"; 
import "../components/SCSS/AboutUs.scss";

function About() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Retrieve token from local storage
    const token = localStorage.getItem('userToken');
    if (!token) {
      alert('You do not have an account yet, sign up to continue');
      return;
    }

    try {
      // Configure the request headers
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };

      // Form data
      const formData = {
        name,
        email,
        message
      };

      // Send the POST request with Axios
      const response = await axios.post('https://api-proyecto-ivory.vercel.app/mensajes', formData, config);
      console.log(response.data);
        alert('Your message has been sent.');
    } catch (error) {
      console.error('There was an error sending the message:', error);
        alert('There was an error sending the message.');
    }
  };

  return (
    <div id="contact">
      <Header/>
      <div className="contact-container">
        <h1 className="ContactTitle">Contact Us</h1>
        <span className="ContactD">Let us know your ideas</span>
        <form className='ContactForm' onSubmit={handleSubmit}>
          <input 
            type="text" 
            className="name" 
            placeholder='Your Name' 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
          <input 
            type="email" 
            className="email" 
            placeholder='Your Email' 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <textarea 
            className="message" 
            placeholder="Message"
            rows="10" 
            value={message} 
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type='submit' className="submitBtn">Submit</button>
        </form>
        <div className="links">Tiktok | Instagram | Facebook</div>
      </div>
    </div>
  );
};

export default About;
