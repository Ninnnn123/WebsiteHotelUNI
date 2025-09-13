import { Navbar, Nav, Button, Container, Row, Col } from 'react-bootstrap';
import './activities.css';
import { Link } from 'react-router-dom';

// --- DATA FOR THE PAGE ---

// Hero Image URL
const heroImageUrl = 'https://m.ahstatic.com/is/image/accorhotels/aja_p_5804-95?qlt=82&wid=1920&ts=1739965305414&dpr=off';

// Activities Programs Data
const activitiesPrograms = [
    {
        imageUrl: 'https://m.ahstatic.com/is/image/accorhotels/HCM_P_0014406?qlt=82&wid=1199&ts=1713276033661&dpr=off',
        title: 'The Butler Did It',
        description: 'A journey like no other where grand history, enchanted glamour and extraordinary adventure entwine.',
    },
    {
        imageUrl: 'https://m.ahstatic.com/is/image/accorhotels/aja_p_7242-21?qlt=82&wid=1199&ts=1724162135893&dpr=off',
        title: 'Happy Hour at the Elephant Bar',
        description: 'Relax as you savour your choice of wines, beers and spirits, including Cambodia’s largest gin collection.',
    },
    {
        imageUrl: 'https://m.ahstatic.com/is/image/accorhotels/aja_p_7238-25?qlt=82&wid=1199&ts=1739965282029&dpr=off',
        title: 'Parisian Champagne Breakfast',
        description: 'Enjoy breakfast in style at Le Phnom 1929 with a freeflow à la carte breakfast. To elevate your experience, add a glass of champagne.',
    },
];

// Activities Gallery Images
const mainActivitiesImages = 'https://m.ahstatic.com/is/image/accorhotels/aja_p_5680-07?qlt=82&wid=1199&ts=1693505052125&dpr=off';
const collageActivitiesImages = [
    'https://th.bing.com/th/id/OIP.QIQl1xG2osgApFuZQob2vwHaEw?w=286&h=184&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
    'https://th.bing.com/th/id/OIP.NbAeAmvDBHV_CKsqdC4DNwHaEO?w=323&h=184&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
    'https://th.bing.com/th/id/OIP.P_0mLKBZkDRWOCnVBnvVDgHaEK?w=259&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
    'https://media-cdn.tripadvisor.com/media/photo-s/16/72/3e/1a/independence-monument.jpg'
];


// --- THE MAIN PAGE COMPONENT ---

function Activities() {
    // Style object for the hero section background image
    const heroStyle = {
        backgroundImage: `url(${heroImageUrl})`
    };

    return (
        <div className="activities-page">
            {/* --- Hero Section (Contains the Navbar) --- */}
            <header className="activities-hero-section" style={heroStyle}>
                <div className="hero-overlay"></div> {/* UPDATED: Added overlay for text readability */}
                <Navbar expand="lg" className="activities-navbar" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home" className="logo-text">
                            <svg width="24" height="24" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" className="logo-svg me-2"><path d="M25 4 L46 25 L25 46 L4 25 Z" strokeWidth="3" fill="none"/></svg>
                            Cambodia Palace
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="main-navbar-nav" />
                        <Navbar.Collapse id="main-navbar-nav" className="justify-content-end">
                            <Nav className="main-nav">
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                                <Nav.Link as={Link} to="/room">Rooms</Nav.Link>
                                <Nav.Link as={Link} to="/dining">Dining</Nav.Link>
                                <Nav.Link as={Link} to="/activities">Activities</Nav.Link>
                                <Nav.Link as={Link} to="/spa">Spa</Nav.Link>
                                <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
                                <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                            </Nav>
                            <Button className="header-book-btn ms-3">Book Now</Button>
                            <img src="https://i.imgur.com/IV4jU3m.jpeg" alt="User Avatar" className="user-avatar" />
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Container className="activities-hero-content">
                    <h1 className="activities-hero-title">Experiences</h1>
                    <p className="activities-hero-subtitle">Making the most of your time in Phnom Penh</p>
                </Container>
            </header>

            {/* --- Main Content --- */}
            <main>
                <Container>

                    {/* --- Activities Programs --- */}
                    <section className="activities-section">
                        <h2 className="section-title">Activities and Programs</h2>
                        <Row>
                            {activitiesPrograms.map((activity, index) => (
                                <Col md={6} key={index} className="mb-4">
                                    <div className="activity-card">
                                        <img src={activity.imageUrl} alt={activity.title} className="card-img" />
                                        <div className="card-body">
                                            <h3 className="card-title">{activity.title}</h3>
                                            <p className="card-description">{activity.description}</p>
                                            <a href="#learn" className="cta-link">Learn More &rarr;</a>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </section>

                    {/* --- Activities Around Phnom Penh --- */}
                    <section className="activities-section">
                        <h2 className="section-title">Activities Around Phnom Penh</h2>
                         <p className="section-intro-text">
                            Many activites around Phnom Penh the amazing capital of Cambodia , come and enjoy great activites around the city , we give you an experience of the activites never been given before.</p>
                        <div className="activities-gallery">
                            <div className="gallery-main-image">
                                <img src={mainActivitiesImages} alt='images here'/>
                            </div>
                            <div className="gallery-collage">
                                {collageActivitiesImages.map((image, index) => (
                                    <div className="gallery-collage-item" key={index}>
                                        <img src={image} alt={`Activity collage item ${index + 1}`} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                    <footer className="activities-footer-section">
                        <Container>
                        <div className="activities-footer-top">
                            <div className="activities-footer-brand">
                                <img
                                    src="https://www.raffles.com/content/dam/raffles-aem/property-logos/logo-phnom-penh-horizontal.svg"
                                    height="25"
                                    className="d-inline-block align-top me-2"
                                    alt="Anantara Angkor logo"
                                />
                                Anantara Angkor
                            </div>
                            <Nav className="activities-footer-nav">
                                <Nav.Link href="#contact">Contact Us</Nav.Link>
                                <Nav.Link href="#privacy">Privacy Policy</Nav.Link>
                                <Nav.Link href="#terms">Terms of Service</Nav.Link>
                            </Nav>
                        </div>
                        <hr />
                        <p className="text-center anantara-copyright">&copy; 2024 Anantara Angkor. All rights reserved.</p>
                        </Container>
                    </footer>
                </Container>
            </main>
        </div>
    );
}

export default Activities;