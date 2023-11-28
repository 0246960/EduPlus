import Header from "../components/Header.jsx/Header"; 
import "../components/SCSS/AboutUs.scss"
function About() { 
    return( 
        <div id="contact"> 
            <Header/> 
            <h1 className="ContactTitle">Contact Us</h1> 
            <span className="ContactD">Let us know what you need</span> 
            <form className='ContactForm'> 
                <input type="text" className="name" placeholder='Your Name' /> 
                <input type="text" className="email" placeholder='Your Email' /> 
                <textarea className="message" name="message" id="" rows="10" placeholder="Message"></textarea> 
                <button type='submit' value='Send' className="submitBtn"> Submit</button> 
                <div className="links">tiktok, instagram, facebook</div> 
            </form> 
             
        </div> 
    ) 
}; 
 
export default About; 
