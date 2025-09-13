import { Navbar, Nav, Container, Row, Col, Button, Card } from 'react-bootstrap';
import { FaCalendarAlt, FaUserFriends } from 'react-icons/fa';
import './home.css';
import { Link } from 'react-router-dom';

function Home() {
    const heroStyle = {
        backgroundImage: `url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/be/51/ee/raffles-hotel-le-royal.jpg?w=1200&h=-1&s=1')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover'
    };

    const escapeStyle = {
        backgroundImage: `url('https://m.ahstatic.com/is/image/accorhotels/aja_p_5801-06?qlt=82&wid=1199&ts=1693508360536&dpr=off')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover'
    };

    return (
        <div className="anantara-homepage">
            {/* Hero Section with Navbar */}
            <header className="anantara-hero-section" style={heroStyle}>
                <div className="anantara-hero-overlay"></div>
                <Navbar expand="lg" variant="dark" className="anantara-main-navbar">
                    <Container>
                        <Navbar.Brand href="#home" className="d-flex align-items-center">
                             <img
                                src="https://www.raffles.com/content/dam/raffles-aem/property-logos/logo-phnom-penh-horizontal.svg" // Simple home icon
                                height="25"
                                className="d-inline-block align-top me-2"
                                alt="Anantara Angkor logo"
                            />
                            Anantara Angkor
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto align-items-center">
                                <Nav.Link as={Link} to="">Home</Nav.Link>
                                <Nav.Link as={Link} to="/room">Rooms</Nav.Link>
                                <Nav.Link as={Link} to="/dining">Dining</Nav.Link>
                                <Nav.Link as={Link} to="/activities">Activities</Nav.Link>
                                <Nav.Link as={Link} to="/spa">Spa</Nav.Link>
                                <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
                                <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                                <Button className="anantara-btn-custom-orange ms-3">Book Now</Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Container className="anantara-hero-content text-center text-white">
                    <h1 className="anantara-hero-title">Experience the Heart of Cambodia</h1>
                    <p className="anantara-hero-subtitle">Discover a sanctuary of tranquility and elegance, where traditional Khmer hospitality meets modern luxury.</p>

                    <div className="anantara-booking-form-container">
                        <Row className="align-items-center">
                            <Col md={5} className="anantara-booking-field">
                                <FaCalendarAlt className="anantara-booking-icon" />
                                <div className="anantara-booking-text">
                                    <label>Check-in / Check-out</label>
                                    <span>Aug 15 - Aug 20</span>
                                </div>
                            </Col>
                            <Col md={3} className="anantara-booking-field">
                                <FaUserFriends className="anantara-booking-icon" />
                                 <div className="anantara-booking-text">
                                    <label>Guests</label>
                                    <span>2 Adults, 0 Children</span>
                                </div>
                            </Col>
                            <Col md={4}>
                                <Button className="anantara-btn-custom-orange w-100 anantara-search-btn">Search for Room</Button>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </header>

            <section className="anantara-content-section text-center">
                <Container>
                    <h2 className="anantara-section-title">Rooms & Suites</h2>
                    <p className="anantara-section-subtitle">Crafted for comfort, designed for dreams. Find your perfect haven of tranquility and luxury. Each space is a blend of traditional Khmer elegance and modern sophistication.</p>
                    <Button variant="outline-dark" className="anantara-btn-view-all">View All Rooms &rarr;</Button>
                    <Row className="mt-5 gx-4">
                        <Col md={6}>
                            <Card className="anantara-image-card">
                                <Card.Img src="https://m.ahstatic.com/is/image/accorhotels/aja_p_7238-61?qlt=82&wid=1199&ts=1734691753609&dpr=off" alt="Suites" />
                                <div className="anantara-card-img-overlay-custom">
                                    <Card.Title>Suites</Card.Title>
                                </div>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card className="anantara-image-card">
                                <Card.Img src="https://m.ahstatic.com/is/image/accorhotels/aja_p_5801-39?qlt=82&wid=1199&ts=1679911615965&dpr=off" alt="Deluxe Rooms" />
                                <div className="anantara-card-img-overlay-custom">
                                    <Card.Title>Deluxe Rooms</Card.Title>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
             <section className="anantara-content-section text-center anantara-bg-light-gray">
                 <Container>
                    <h2 className="anantara-section-title">Authentic Dining</h2>
                    <p className="anantara-section-subtitle">Embark on a culinary journey that tantalizes the senses, from authentic local flavors to international delights in settings of unmatched elegance.</p>
                    <Row className="mt-5 gx-4">
                        <Col md={4}>
                            <Card className="anantara-image-card">
                                <Card.Img src="https://tse2.mm.bing.net/th/id/OIP.EX3aLm0gPfJu_HZmmZQMoQHaE8?cb=ucfimgc2&rs=1&pid=ImgDetMain&o=7&rm=3" alt="The Royal Khmer" />
                                <div className="anantara-card-img-overlay-custom">
                                    <Card.Title>The Royal Khmer</Card.Title>
                                </div>
                            </Card>
                        </Col>
                         <Col md={4}>
                            <Card className="anantara-image-card">
                                <Card.Img src="https://m.ahstatic.com/is/image/accorhotels/aja_p_5680-07?qlt=82&wid=1199&ts=1693505052125&dpr=off" alt="The Riverside Bistro" />
                                <div className="anantara-card-img-overlay-custom">
                                    <Card.Title>The Riverside Bistro</Card.Title>
                                </div>
                            </Card>
                        </Col>
                        <Col md={4}>
                             <Card className="anantara-image-card">
                                <Card.Img src="https://m.ahstatic.com/is/image/accorhotels/aja_p_5801-24?qlt=82&wid=1199&ts=1739965274660&dpr=off" alt="The Sunset Lounge" />
                                <div className="anantara-card-img-overlay-custom">
                                    <Card.Title>The Sunset Lounge</Card.Title>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="anantara-content-section">
                <Container>
                    <Row className="g-4">
                        <Col lg={6}>
                             <Card className="anantara-image-card h-100">
                                <Card.Img src="https://m.ahstatic.com/is/image/accorhotels/aja_p_5804-95?qlt=82&wid=1920&ts=1739965305414&dpr=off" alt="Cultural Experiences" className="h-100" />
                                <div className="anantara-card-img-overlay-custom anantara-card-overlay-content">
                                    <div>
                                        <Card.Title>Cultural Experiences</Card.Title>
                                        <p>Immerse yourself in Cambodia's rich heritage with guided tours to ancient wonders.</p>
                                    </div>
                                    <a href="#tours" className="anantara-stretched-link-custom">Explore Tours &rarr;</a>
                                </div>
                            </Card>
                        </Col>
                        <Col lg={6}>
                            <Row className="g-4">
                                <Col sm={12}>
                                    <Card className="anantara-image-card">
                                        <Card.Img src="https://m.ahstatic.com/is/image/accorhotels/aja_p_7242-21?qlt=82&wid=1199&ts=1724162135893&dpr=off" alt="Local Adventures" />
                                        <div className="anantara-card-img-overlay-custom anantara-card-overlay-content">
                                            <div>
                                                <Card.Title>Local Adventures</Card.Title>
                                                <p>Discover the natural beauty surrounding our resort.</p>
                                            </div>
                                            <a href="#adventures" className="anantara-stretched-link-custom">Start Exploring &rarr;</a>
                                        </div>
                                    </Card>
                                </Col>
                                <Col sm={12}>
                                     <Card className="anantara-image-card">
                                        <Card.Img src="https://m.ahstatic.com/is/image/accorhotels/aja_p_7238-25?qlt=82&wid=1199&ts=1739965282029&dpr=off" alt="Wellness & Spa" />
                                        <div className="anantara-card-img-overlay-custom anantara-card-overlay-content">
                                            <div>
                                                <Card.Title>Wellness & Spa</Card.Title>
                                                <p>Rejuvenate your body and soul with our signature treatments.</p>
                                            </div>
                                            <a href="#spa" className="anantara-stretched-link-custom">Find Your Bliss &rarr;</a>
                                        </div>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Cambodian Escape Section */}
            <section className="anantara-escape-section text-center text-white" style={escapeStyle}>
                 <div className="anantara-hero-overlay"></div>
                <Container className="anantara-escape-content">
                    <h2 className="anantara-section-title">Your Cambodian Escape Awaits</h2>
                    <p className="anantara-section-subtitle">Create memories that will last a lifetime. Book your unforgettable stay at Anantara Angkor Resort and immerse yourself in the magic of Cambodia.</p>
                    <Button className="anantara-btn-custom-orange anantara-btn-lg">Book Your Unforgettable Stay</Button>
                </Container>
            </section>

            {/* ... Footer ... */}
            <footer className="anantara-footer-section">
                <Container>
                    <div className="anantara-footer-top">
                        <div className="anantara-footer-brand">
                             <img
                                src="https://www.raffles.com/content/dam/raffles-aem/property-logos/logo-phnom-penh-horizontal.svg"
                                height="25"
                                className="d-inline-block align-top me-2"
                                alt="Anantara Angkor logo"
                            />
                            Anantara Angkor
                        </div>
                        <Nav className="anantara-footer-nav">
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
export default Home;