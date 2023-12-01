import { Container, Carousel, Image } from "react-bootstrap";
import "./Carousel.scss"; // Asegúrate de tener un archivo SCSS para los estilos

function ImgCarousel() {
  return (
    <Container fluid className="carousel-container my-5">
      <Carousel data-bs-theme="dark" pause="hover" indicators={false} className="shadow">
        <Carousel.Item interval={5000}>
          <Image 
            fluid 
            className="d-block w-100" 
            alt="Education for Sustainable Development" 
            src="https://www.gob.mx/cms/uploads/article/main_image/64273/ODS_4-01.jpg"
          />
          <Carousel.Caption>
            <h3>Educación de Calidad</h3>
            <p>Objetivo de Desarrollo Sostenible 4.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <Image 
            fluid 
            className="d-block w-100" 
            alt="Gender Equality in Education" 
            src="https://www.unwomen.org/sites/default/files/Headquarters/Images/Sections/News/In%20Focus/SDGs/infographics-2018/SDG-Factoids-04-es.png?h=350&w=350"
          />
          <Carousel.Caption>
            <h3>Igualdad de Género en la Educación</h3>
            <p>Empoderando a través de la educación inclusiva.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <Image 
            fluid 
            className="d-block w-100" 
            alt="Innovative Education" 
            src="https://www.elternativa.com/wp-content/uploads/2023/07/ODS-4.jpg"
          />
          <Carousel.Caption>
            <h3>Educación Innovadora</h3>
            <p>Innovando para el futuro de la enseñanza y el aprendizaje.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default ImgCarousel;
