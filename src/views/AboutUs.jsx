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

    // Recuperar el token del almacenamiento local
    const token = localStorage.getItem('userToken');
    if (!token) {
      alert('No tienes un token. Por favor, inicia sesión primero.');
      return;
    }

    try {
      // Configurar los headers de la solicitud
      const config = {
        headers: { Authorization: `Bearer ${token}` }
      };

      // Datos del formulario
      const formData = {
        name,
        email,
        message
      };

      // Enviar la solicitud POST con Axios
      const response = await axios.post('https://api-proyecto-ivory.vercel.app/mensajes', formData, config);
      console.log(response.data);
        alert('Tu mensaje ha sido enviado.');
      // Aquí puedes agregar lógica para mostrar un mensaje de éxito o limpiar el formulario.
    } catch (error) {
      console.error('There was an error sending the message:', error);
        alert('Hubo un error al enviar el mensaje.');
      // Aquí puedes agregar lógica para mostrar un mensaje de error.
    }
  };

  return (
    <div id="contact">
      <Header/>
      <div className="contact-container">
        <h1 className="ContactTitle">Contact Us</h1>
        <span className="ContactD">Let us know what you need</span>
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
        <div className="links">tiktok, instagram, facebook</div>
      </div>
    </div>
  );
};

export default About;
