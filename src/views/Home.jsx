import { Accordion, Container, Carousel, Image} from "react-bootstrap";
import React, { useEffect, useState } from "react"
import Header from "../components/Header.jsx/Header";
import Axios from "axios";
import "../components/SCSS/Home.scss";

function Home() {
    const [info, setInfo] = useState();
  
    useEffect(() => {
        Axios.get("https://unstats.un.org/SDGAPI/v1/sdg/Goal/4/Target/List?includechildren=true")
        .then((res) => {
            setInfo(res.data);
            console.log(res.data)
        })
        .catch((error) => {
            // Error
            if (error.response) {
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
        } 
        })
    }, []);

    const num = [1,2,3,4,5,6,7,8,9];

    return(
        
        <div className="content">
            <Header/>

            <Container fluid className="carousel-container">
                <Carousel data-bs-theme="dark" pause="hover">
                    <Carousel.Item interval={2000}>
                        <Image className="w-100" text="First slide" src="https://placehold.co/1200x400"/>
                        <Carousel.Caption>
                        <h3>United Nations</h3>
                        <p>Learn more about us.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <Image className="d-block w-100" text="Second slide" src="https://placehold.co/1200x400"/>
                        <Carousel.Caption>
                        <h3>Sustainable Develoment Goals</h3>
                        <p>Visit our Website.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <Image className="d-block w-100" text="Third slide" src="https://placehold.co/1200x400"/>
                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        
            <Container className="info">
                <h2>
                Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all
                </h2>
                <p> 
                    Even before the COVID-19 pandemic, the world was already off-track to achieve its education targets. 
                    If no additional measures are taken, only one in six countries will meet SDG4 and achieve universal access to quality education by 2030.
                    An estimated 84 million children and young people will still be out of school and an estimated 300 million student will still not have the basic numeracy and literacy skills they need to succeed in life. 
                    To deliver SDG4, education systems must be re-imagined, and education financing must become a priority national investment.
                </p>
            </Container>

            <div className="divisor">
            </div>

            <Container  className="targets">
                <h3>Targets for this goal.</h3>
                    {/*Map */}
                    { num.map(id => {
                        return (
                            <Accordion>
                                <Accordion.Item eventKey={id}>
                                    <Accordion.Header>Target {id}</Accordion.Header>
                                    <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        )
                    })}  
            </Container>
        </div>
    )
};

export default Home;