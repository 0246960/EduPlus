import { Container, Carousel, Image } from "react-bootstrap";
import "./Carousel.scss"; // Make sure you have an SCSS file for the styles.

function ImgCarousel() {
  return (
    <Container fluid className="carousel-container my-5">
      <Carousel data-bs-theme="dark" pause="hover" indicators={false} className="shadow">
        <Carousel.Item interval={5000}>
          <Image 
            fluid 
            className="d-block w-100" 
            alt="Education for Sustainable Development" 
            src="https://www.isglobal.org/documents/10179/6939455/SDG+4+grande+en.jpg/6ff8e7db-cb48-4213-b721-91ec54130589?t=1539682384000"
          />
          <Carousel.Caption>
            <h3>Quality Education</h3>
            <p>Sustainable Development Goal 4.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <Image 
            fluid 
            className="d-block w-100" 
            alt="Gender Equality in Education" 
            src="https://asiasociety.org/sites/default/files/styles/1200w/public/1/1012-equity-keypolicies.png"
          />
          <Carousel.Caption>
            <h3>Gender Equality in Education</h3>
            <p>Empowering through Inclusive Education.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <Image 
            fluid 
            className="d-block w-100" 
            alt="Innovative Education" 
            src="https://unu.edu/sites/default/files/styles/og_image/public/2023-10/51221675490_88401f45d8_k.png?itok=MDJNF5nG"
          />
          <Carousel.Caption>
            <h3>Innovative Education</h3>
            <p>Innovating for the future of teaching and learning.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default ImgCarousel;