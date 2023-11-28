import {Button, Container, Image, Row, Col} from "react-bootstrap";
import Header from "../components/Header.jsx/Header";
import "../components/SCSS/Home.scss";
import ImgCarousel from "../components/Carousel/Carousel";

function Home() {
  
    return(
        
        <div className="content">
            <Header/>

            <div className="home">
                <h1>EduPlus</h1>
                <p>Elevating the learning experience</p>
                <Container className="header">
                    <Row>
                        <Col>
                            <Image fluid  className="img1" alt="What we want" src="https://www.morespaceplace.com/wp-content/uploads/2018/12/young-child-studying-807406496-min.jpg"/>
                        </Col>
                        <Col className="desc bg-primary">
                            <h3>What we want</h3>
                            <p className="text-light">Working in the guide of the 4th United Nations Sustainable Development Goal(SDG), 
                            we seek to bring to light all data related to worlwide education and how accesible it is to the population,
                            as well as the quality of this education.
                            </p>
                        </Col>
                    </Row>
                   
                </Container>
            </div>

            <Container className="stats bg-primary" id="stats">
                <h1>Statistics</h1>
                <div className="graphs">
                    <Image className="gImage" fluid alt="graph1" src="https://wenr.wes.org/wp-content/uploads/2018/09/WENR-0618-Country-Profile-India.png"/>
                    <Image className="gImage" fluid alt="graph2" src="https://data.unicef.org/wp-content/uploads/2021/12/UN0487758-2000x1333.jpg"/>
                </div>
                <Button size="lg" variant="info" href="https://www.unesco.org/en/education">Learn more!</Button>
            </Container>

            <Container className="call-to-action" id="call-to-action">
                <Image className="cImg" alt="call-to-action" src="https://s26162.pcdn.co/wp-content/uploads/2023/06/overflowing-bookcases.jpg"/>
                <p>Lorem ipsedum</p>
            </Container>
        </div>
    )
};

export default Home;