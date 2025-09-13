import { Navbar, Nav, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './room.css';

function Room() {
    // Define your hero background image URL here
    const heroBackgroundImage = 'https://m.ahstatic.com/is/image/accorhotels/aja_p_7238-61?qlt=82&wid=1199&ts=1734691753609&dpr=off';

    const heroStyle = {
        backgroundImage: `url(${heroBackgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover'
    };

    return (
        <>
            {/* Hero Section - Updated to match home.js structure and classes */}
            <header className="anantara-hero-section" style={heroStyle}>
                <div className="anantara-hero-overlay"></div>
                <Navbar expand="lg" variant="dark" className="anantara-main-navbar">
                    <Container>
                        <Navbar.Brand href="#home" className="d-flex align-items-center">
                             <img
                                src="https://www.raffles.com/content/dam/raffles-aem/property-logos/logo-phnom-penh-horizontal.svg" // Using the same logo as home page
                                height="25"
                                className="d-inline-block align-top me-2"
                                alt="Anantara Angkor logo"
                            />
                            Anantara Angkor
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto align-items-center">
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
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
                    <h1 className="anantara-hero-title">Our Rooms & Suites</h1>
                    <p className="anantara-hero-subtitle">
                        Discover your perfect sanctuary at Hotel Cambodge. Our rooms and suites offer a blend of
                        luxury, comfort and breathtaking views, creating an unforgettable stay.
                    </p>
                </Container>
            </header>

            {/* Room Section */}
            <Container className="room-page-content-section my-5">
                {/* Oceanfront Suite */}
                <Card className="room-page-card mb-4">
                    <Row noGutters>
                        <Col md={5}>
                            <Card.Img src="https://d1t1qzzb2zwrre.cloudfront.net/master/media/cache/raffles_thumbs/room/68/68c1ceb02400f344012130.webp" alt="Oceanfront Suite" className="room-page-img" />
                        </Col>
                        <Col md={7}>
                            <Card.Body>
                                <Card.Title className="room-page-title">Oceanfront Suite</Card.Title>
                                <div className="room-page-details d-flex flex-wrap mb-2">
                                    <span className="room-page-detail-item me-3"><i className="bi bi-square"></i> 130 sqm</span>
                                    <span className="room-page-detail-item me-3"><i className="bi bi-bed"></i> King Bed</span>
                                    <span className="room-page-detail-item"><i className="bi bi-water"></i> Private Balcony</span>
                                </div>
                                <Card.Text className="room-page-description">
                                    Indulge in the ultimate luxury with our spacious suites, featuring private
                                    balconies, separate living areas, and panoramic ocean views. Perfect for families
                                    or those seeking extra space and comfort.
                                </Card.Text>
                                <div className="d-flex justify-content-between align-items-center mt-3">
                                    <span className="room-page-price">$450 <small>/ night</small></span>
                                    <Button variant="warning" className="room-page-card-book-btn">Book Now</Button>
                                </div>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>

                {/* Deluxe Room */}
                <Card className="room-page-card mb-4">
                    <Row noGutters>
                        <Col md={5} className="order-md-2"> {/* Image on right for Deluxe */}
                            <Card.Img src="https://d1t1qzzb2zwrre.cloudfront.net/master/media/cache/raffles_thumbs/room/68/68c1ced8c055e564459172.webp" alt="Deluxe Room" className="room-page-img" />
                        </Col>
                        <Col md={7} className="order-md-1">
                            <Card.Body>
                                <Card.Title className="room-page-title">Deluxe Room</Card.Title>
                                <div className="room-page-details d-flex flex-wrap mb-2">
                                    <span className="room-page-detail-item me-3"><i className="bi bi-square"></i> 50 sqm</span>
                                    <span className="room-page-detail-item me-3"><i className="bi bi-bed"></i> King or Twin</span>
                                    <span className="room-page-detail-item"><i className="bi bi-tree"></i> Garden/Pool View</span>
                                </div>
                                <Card.Text className="room-page-description">
                                    Experience unparalleled tranquility in our elegantly designed deluxe rooms, offering stunning modern
                                    comfort and pool views, plush bedding, and modern amenities for a relaxing retreat.
                                </Card.Text>
                                <div className="d-flex justify-content-between align-items-center mt-3">
                                    <span className="room-page-price">$250 <small>/ night</small></span>
                                    <Button variant="warning" className="room-page-card-book-btn">Book Now</Button>
                                </div>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>

                {/* Standard Room */}
                <Card className="room-page-card mb-4">
                    <Row noGutters>
                        <Col md={5}>
                            <Card.Img src="https://d1t1qzzb2zwrre.cloudfront.net/master/media/cache/raffles_thumbs/room/68/68c1cf542c2c7706716983.webp" alt="Standard Room" className="room-page-img" />
                        </Col>
                        <Col md={7}>
                            <Card.Body>
                                <Card.Title className="room-page-title">Standard Room</Card.Title>
                                <div className="room-page-details d-flex flex-wrap mb-2">
                                    <span className="room-page-detail-item me-3"><i className="bi bi-square"></i> 40 sqm</span>
                                    <span className="room-page-detail-item me-3"><i className="bi bi-bed"></i> QUEEN</span>
                                    <span className="room-page-detail-item me-3"><i className="bi bi-city"></i> City View</span>
                                </div>
                                <Card.Text className="room-page-description">
                                    Enjoy a seamless blend of comfort and convenience in our contemporary
                                    standard rooms, equipped with all essential amenities and a cozy ambiance for a
                                    pleasant stay.
                                </Card.Text>
                                <div className="d-flex justify-content-between align-items-center mt-3">
                                    <span className="room-page-price">$180 <small>/ night</small></span>
                                    <Button variant="warning" className="room-page-card-book-btn">Book Now</Button>
                                </div>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>

                {/* Eco Bungalow */}
                <Card className="room-page-card mb-4">
                    <Row noGutters>
                        <Col md={5} className="order-md-2"> {/* Image on right for Eco Bungalow */}
                            <Card.Img src="https://d1t1qzzb2zwrre.cloudfront.net/master/media/cache/raffles_thumbs/room/68/68c1cf7cc4bcf075983266.webp" alt="Eco Bungalow" className="room-page-img" />
                        </Col>
                        <Col md={7} className="order-md-1">
                            <Card.Body>
                                <Card.Title className="room-page-title">Eco Bungalow</Card.Title>
                                <div className="room-page-details d-flex flex-wrap mb-2">
                                    <span className="room-page-detail-item me-3"><i className="bi bi-square"></i> 50 sqm</span>
                                    <span className="room-page-detail-item me-3"><i className="bi bi-bed"></i> King Bed</span>
                                    <span className="room-page-detail-item"><i className="bi bi-compass"></i> Nature View</span>
                                </div>
                                <Card.Text className="room-page-description">
                                    Immerse yourself in the natural beauty of Cambodia with our eco-friendly
                                    bungalows, featuring sustainable materials, private terraces, and direct access to
                                    the lush surroundings.
                                </Card.Text>
                                <div className="d-flex justify-content-between align-items-center mt-3">
                                    <span className="room-page-price">$220 <small>/ night</small></span>
                                    <Button variant="warning" className="room-page-card-book-btn">Book Now</Button>
                                </div>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </Container>
        </>
    );
}

export default Room;