import { Container, Carousel, Image } from "react-bootstrap";

function ImgCarousel() {
    return (
        <Container fluid className="carousel-container">
            <Carousel data-bs-theme="dark" pause="hover" indicators={false}>
                <Carousel.Item interval={2000}>
                    <Image fluid text="First slide" src="https://placehold.co/1200x400"/>
                    <Carousel.Caption>
                    <h3>United Nations</h3>
                    <p>Learn more about this goal.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <Image fluid text="Second slide" src="https://placehold.co/1200x400"/>
                    <Carousel.Caption>
                    <h3>Sustainable Develoment Goals</h3>
                    <p>Visit this page to see more </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <Image fluid text="Third slide" src="https://placehold.co/1200x400"/>
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    )
}

export default ImgCarousel;
