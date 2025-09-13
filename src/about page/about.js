import { Navbar, Nav, Button, Container, Row, Col} from 'react-bootstrap';
import { BsGlobe } from 'react-icons/bs'; // Importing a globe icon
import './about.css';
import { Link } from 'react-router-dom';

function About() {
    // Define the style for the hero section's background image
    const aboutHeroStyle = {
        backgroundImage: `url('https://savourblackbookasia.com/wp-content/uploads/2019/01/IMG_20190104_150809-1200x800.jpg')` // Replace with your actual hero image URL
    };

    return (
        <div className="about-page-container"> {/* Changed */}
            {/* Hero Section */}
            <header className="about-hero-section" style={aboutHeroStyle}>
                <div className="about-hero-overlay"></div>
                <Navbar expand="lg" variant="dark" className="about-main-navbar"> {/* Changed */}
                    <Container>
                        <Navbar.Brand href="#home">
                            {/* You would replace this text with your actual logo image */}
                            <span className="about-logo-text">Hotel Cambodge</span> {/* Changed */}
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                            <Nav className="ms-auto align-items-center">
                                <Nav.Link as={Link} to="/" className="about-nav-link">Home</Nav.Link> {/* Changed */}
                                <Nav.Link as={Link} to="/room" className="about-nav-link">Rooms</Nav.Link> {/* Changed */}
                                <Nav.Link href="#dining" className="about-nav-link">Dining</Nav.Link> {/* Changed */}
                                <Nav.Link href="#activities" className="about-nav-link">Activities</Nav.Link> {/* Changed */}
                                <Nav.Link href="#spa" className="about-nav-link">Spa</Nav.Link> {/* Changed */}
                                <Nav.Link href="#gallery" className="about-nav-link">Gallery</Nav.Link> {/* Changed */}
                                <Nav.Link as={Link} to="/about" className="about-nav-link">About Us</Nav.Link> {/* Changed */}
                                <Button variant="outline-light" className="about-book-now-btn ms-3">Book Now</Button> {/* Changed */}
                                <Nav.Link href="#language" className="about-nav-link ms-2"><BsGlobe size={20} /></Nav.Link> {/* Changed */}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Container className="about-hero-content text-center text-white">
                    <h1 className="about-hero-title">Our Story</h1>
                    <p className="about-hero-subtitle">A sanctuary of luxury and heritage in the heart of Cambodia.</p>
                </Container>
            </header>

            {/* Our Story Intro Section */}
            <section className="about-content-section text-center">
                <Container>
                    <Row>
                        <Col lg={8} className="mx-auto">
                            <p className="about-intro-text">
                                Nestled in the heart of Phnom Penh, Hotel Cambodge stands as a beacon of luxury and tranquility. Our journey began with a vision to create a sanctuary where guests could immerse themselves in the rich tapestry of Cambodian culture while indulging in unparalleled comfort and service. From its inception, the hotel has been a testament to the enduring spirit of Cambodian hospitality, blending traditional elegance with contemporary sophistication.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* A Legacy of Excellence Section */}
            <section className="about-content-section">
                <Container>
                    <Row className="align-items-center">
                        <Col md={6}>
                            <h2 className="about-section-title">A Legacy of Excellence</h2>
                            <p className="about-section-text">
                                Hotel Cambodge is more than just a place to stay; it’s a destination steeped in history and tradition. Our architecture pays homage to the ancient temples of Angkor, with intricate carvings and serene courtyards that evoke a sense of timeless beauty. Each corner of the hotel tells a story, from the handcrafted furnishings to the locally sourced materials, reflecting our commitment to preserving and celebrating Cambodian heritage.
                            </p>
                        </Col>
                        <Col md={6}>
                             {/* Replace with your actual gallery image */}
                            <img src="https://m.ahstatic.com/is/image/accorhotels/aja_p_7238-13?wid=1920" alt="Legacy of Excellence" className="img-fluid" />
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Unforgettable Experiences Section */}
            <section className="about-content-section">
                <Container>
                    <Row className="align-items-center">
                         <Col md={6}>
                            {/* Replace with your actual gallery image */}
                            <img src="https://m.ahstatic.com/is/image/accorhotels/aja_p_7238-76?wid=1920" alt="Unforgettable Experiences" className="img-fluid" />
                        </Col>
                        <Col md={6}>
                            <h2 className="about-section-title">Unforgettable Experiences</h2>
                            <p className="about-section-text">
                                At Hotel Cambodge, we believe that every guest deserves an experience that transcends the ordinary. Our dedicated team is passionate about curating personalized journeys, whether it’s exploring the vibrant streets of Phnom Penh, indulging in a rejuvenating spa treatment, or savoring the exquisite flavors of Cambodian cuisine. We strive to create lasting memories, ensuring that your stay with us is nothing short of extraordinary.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Footer */}
            <footer className="about-footer-section">
                <Container>
                    <div className="about-footer-top">
                        <div className="about-footer-brand">
                             <img
                                src="https://www.raffles.com/content/dam/raffles-aem/property-logos/logo-phnom-penh-horizontal.svg"
                                height="25"
                                className="d-inline-block align-top me-2"
                                alt="Anantara Angkor logo"
                            />
                            Anantara Angkor
                        </div>
                        <Nav className="about-footer-nav">
                            <Nav.Link href="#contact">Contact Us</Nav.Link>
                            <Nav.Link href="#privacy">Privacy Policy</Nav.Link>
                            <Nav.Link href="#terms">Terms of Service</Nav.Link>
                        </Nav>
                    </div>
                    <hr />
                    <p className="text-center anantara-copyright">&copy; 2024 Anantara Angkor. All rights reserved.</p>
                </Container>
            </footer>
        </div>
    );
}

export default About;