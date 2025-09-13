import { Container, Row, Col, Navbar, Nav, Button, Image } from 'react-bootstrap';
import { BsGlobe } from 'react-icons/bs'; // For header icon
import { Link } from 'react-router-dom';   // For header navigation
import './gallery.css';                   // The single, consolidated stylesheet

function Gallery() {
    // Style for the hero background image
    const galleryHeroStyle = {
        backgroundImage: `url(https://m.ahstatic.com/is/image/accorhotels/aja_p_7242-52?qlt=82&wid=1199&ts=1724162233448&dpr=off)`
    };

    return (
        <>
            {/* --- START: New Header --- */}
            <header className="about-hero-section" style={galleryHeroStyle}>
                <div className="about-hero-overlay"></div>
                <Navbar expand="lg" variant="dark" className="about-main-navbar">
                    <Container>
                        <Navbar.Brand href="#home">
                            <span className="about-logo-text">Hotel Cambodge</span>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                            <Nav className="ms-auto align-items-center">
                                <Nav.Link as={Link} to="/" className="about-nav-link">Home</Nav.Link>
                                <Nav.Link as={Link} to="/room" className="about-nav-link">Rooms</Nav.Link>
                                <Nav.Link as={Link} to="/dining" className="about-nav-link">Dining</Nav.Link>
                                <Nav.Link as={Link} to="/activities" className="about-nav-link">Activities</Nav.Link>
                                <Nav.Link as={Link} to="/spa" className="about-nav-link">Spa</Nav.Link>
                                <Nav.Link as={Link} to="/gallery" className="about-nav-link">Gallery</Nav.Link>
                                <Nav.Link as={Link} to="/about" className="about-nav-link">About Us</Nav.Link>
                                <Button variant="outline-light" className="about-book-now-btn ms-3">Book Now</Button>
                                <Nav.Link href="#language" className="about-nav-link ms-2"><BsGlobe size={20} /></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Container className="about-hero-content text-center text-white">
                    <h1 className="about-hero-title">Our Gallery</h1>
                    <p className="about-hero-subtitle">
                        A visual journey through the elegance and tranquility of Anantara Angkor Resort.
                    </p>
                </Container>
            </header>
            {/* --- END: New Header --- */}


            {/* An Artful Display Section */}
            <Container className="my-5 py-5 text-center">
                <h2 className="mb-4 display-5 fw-light gallery-artful-title">An Artful Display</h2>
                <p className="lead text-muted px-4 mx-auto" style={{ maxWidth: '800px' }}>
                    Discover the breathtaking beauty of our resort, from the luxurious interiors of our suites
                    to the serene landscapes that surround us. Each image captures a moment of the unique
                    Anantara experience.
                </p>
            </Container>

            {/* Gallery Images Section */}
            <Container className="mb-5 pb-3">
                <Row className="g-4">
                    <Col xs={12} md={6} lg={4}>
                        <Image src={'https://m.ahstatic.com/is/image/accorhotels/aja_p_7238-05?qlt=82&wid=1199&ts=1734691662043&dpr=off'} alt="Resort Pool at Dusk" fluid className="shadow-sm rounded" />
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <Image src={'https://www.raffles.com/adobe/dynamicmedia/deliver/dm-aid--7fb83f41-c319-49ff-805f-8cb7c5659db5/aja-p-7238-50.jpg?quality=82&width=1199&preferwebp=true'} alt="Green Spa Setting" fluid className="shadow-sm rounded" />
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <Image src={'https://m.ahstatic.com/is/image/accorhotels/aja_p_7238-25?qlt=82&wid=1199&ts=1739965282029&dpr=off'} alt="Sunset Drink" fluid className="shadow-sm rounded" />
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <Image src={'https://www.raffles.com/adobe/dynamicmedia/deliver/dm-aid--1fcf6802-5ac7-40de-a115-4abe0438ddcd/aja-p-7238-45.jpg?quality=82&width=1199&preferwebp=true'} alt="Thai Food Platter" fluid className="shadow-sm rounded" />
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <Image src={'https://m.ahstatic.com/is/image/accorhotels/aja_p_7238-21?qlt=82&wid=1199&ts=1739965299092&dpr=off'} alt="Room with a View" fluid className="shadow-sm rounded" />
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <Image src={'https://m.ahstatic.com/is/image/accorhotels/aja_p_7238-76?qlt=82&wid=1199&ts=1734691753734&dpr=off'} alt="Kayaking on Lake" fluid className="shadow-sm rounded" />
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <Image src={'https://m.ahstatic.com/is/image/accorhotels/aja_p_7238-30?qlt=82&wid=1199&ts=1739965267445&dpr=off'} alt="Ancient Temple" fluid className="shadow-sm rounded" />
                    </Col>
                    <Col xs={12} md={6} lg={8}> {/* This image spans two columns on larger screens */}
                        <Image src={'https://m.ahstatic.com/is/image/accorhotels/aja_p_7238-13?qlt=82&wid=1199&ts=1734691658899&dpr=off'} alt="Lush River View" fluid className="shadow-sm rounded" />
                    </Col>
                </Row>
            </Container>

            {/* Footer */}
            <footer className="gallery-footer-section">
                <Container>
                    <div className="gallery-footer-top">
                        <div className="gallery-footer-brand">
                             <img
                                src="https://www.raffles.com/content/dam/raffles-aem/property-logos/logo-phnom-penh-horizontal.svg"
                                height="25"
                                className="d-inline-block align-top me-2"
                                alt="Anantara Angkor logo"
                            />
                            Anantara Angkor
                        </div>
                        <Nav className="gallery-footer-nav">
                            <Nav.Link href="#contact">Contact Us</Nav.Link>
                            <Nav.Link href="#privacy">Privacy Policy</Nav.Link>
                            <Nav.Link href="#terms">Terms of Service</Nav.Link>
                        </Nav>
                    </div>
                    <hr />
                    <p className="text-center anantara-copyright">&copy; 2024 Anantara Angkor. All rights reserved.</p>
                </Container>
            </footer>
        </>
    );
}

export default Gallery;