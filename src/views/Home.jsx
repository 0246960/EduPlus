import { Button, Container, Image, Row, Col } from "react-bootstrap";
import Header from "../components/Header/Header";
import "../components/SCSS/Home.scss";
import ImgCarousel from "../components/Carousel/Carousel";

function Home() {
  return (
    <div className="content">
      <Header />

      <ImgCarousel /> {/* Assuming ImgCarousel is a carousel component */}

      <section className="hero-section text-center py-5">
        <h1 className="display-4 fw-bold">EduPlus</h1>
        <p className="lead">Elevating the learning experience</p>
      </section>

      <Container className="my-5">
        <Row className="align-items-center">
          <Col md={6} className="mb-3 mb-md-0">
            <Image
              fluid
              className="rounded shadow"
              alt="What we want"
              src="https://www.morespaceplace.com/wp-content/uploads/2018/12/young-child-studying-807406496-min.jpg"
            />
          </Col>
          <Col md={6} className="bg-primary text-light p-4 rounded shadow">
            <h3>What we pursue</h3>
            <p>
              Working in the guide of the 4th United Nations Sustainable Development Goal (SDG), we seek to bring to light all data related to worldwide education and how accessible it is to the population, as well as the quality of this education.
            </p>
          </Col>
        </Row>
      </Container>

      <Container className="stats-news-section text-center py-5 bg-primary text-light">
        <h2 className="mb-4">Statistics and News</h2>
        <Row>
          <Col md={6} className="mb-3 mb-md-0">
            <Image className="rounded shadow" fluid alt="graph1" src="https://wenr.wes.org/wp-content/uploads/2018/09/WENR-0618-Country-Profile-India.png" />
          </Col>
          <Col md={6}>
            <Image className="rounded shadow" fluid alt="graph2" src="https://data.unicef.org/wp-content/uploads/2021/12/UN0487758-2000x1333.jpg" />
          </Col>
        </Row>
        <Row>
         <Col md={6}>
           <Button size="lg" variant="light" className="mt-4" href="https://data.worldbank.org/topic/education?end=2022&start=2014">See more statistics here!</Button>
         </Col>
         <Col md={6}>
           <Button size="lg" variant="light" className="mt-4" href="https://uis.unesco.org/en/topic/sustainable-development-goal-4">See some news about education!</Button>
         </Col>
        </Row>
      </Container>

      <Container className="call-to-action text-center py-5 my-5">
        <Image
          className="cImg mb-4 rounded shadow"
          alt="call-to-action"
          src="https://s26162.pcdn.co/wp-content/uploads/2023/06/overflowing-bookcases.jpg"
        />
        <p>Join us in our mission to improve the global education landscape.</p>
        <Button size="lg" variant="primary" href="/about-us" className="mt-4">
          How to help
        </Button>
      </Container>

      <footer className="footer bg-dark text-light py-3">
        <Container className="text-center">
          <p>&copy; {new Date().getFullYear()} EduPlus. All Rights Reserved.</p>
        </Container>
      </footer>
    </div>
  );
}

export default Home;
