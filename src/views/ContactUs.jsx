
import Header from "../components/Header.jsx/Header";
import "../components/SCSS/Help.scss";

function About() {
    return(
        <div id="contact">
            <Header/>
            <h1 className="ContactTitle"> Contact Us</h1>
            <span className="ContactD">Let us know your ideas</span>
            <form className='ContactForm'>
                <input type="text" className="name" placeholder='Your Name' />
                <input type="text" className="email" placeholder='Your Email' />
                <textarea className="message" name="message" id="" rows="10" placeholder="Message"></textarea>
                <button type='submit' value='Send' className="submitBtn"> Submit</button>
                <div className="links">Tiktok | Instagram | Facebook</div>
            </form>
            
        </div>
    )
};

export default About;
