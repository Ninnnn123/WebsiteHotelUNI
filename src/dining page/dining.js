import { Navbar, Nav, Button, Container, Row, Col } from 'react-bootstrap';
import './dining.css';
import { Link } from 'react-router-dom';

// --- DATA FOR THE PAGE ---

// Hero Image URL
const heroImageUrl = 'https://m.ahstatic.com/is/image/accorhotels/aja_p_5801-88?qlt=82&wid=1199&ts=1739964787609&dpr=off';

// Spa Treatments Data
const foodOfferings = [
    {
        title: 'American Food Festival',
        description: 'Come and experience the American Food Festival at AME Resturant located on the right of the dinning floor , this festival offer a wide range of American food come and join us and celebrate together.',
    },
    {
        title: 'Chinese Food at Chinese Rest Resturant',
        description: 'Come and enjoy some Chinese food at the resturant located on the left of the dining floor , we are known for greate Chinese food so come and join us and we are happy to serve you.',
    },
    {
        title: 'Asian Food Festival',
        description: 'Enjoy amazing Asian food at our resturant at Asian Rest Resturant located on the left to Chinese Rest Resturant , so come and enjoy a greate and a good wide selection of Asisan Food at the resturant , we are ready to serve you and offer the best Asian food you ever eaten.',
    }
];

// Wellness Programs Data
const resturantatHotel = [
    {
        imageUrl: 'https://m.ahstatic.com/is/image/accorhotels/aja_p_5680-07?qlt=82&wid=1199&ts=1693505052125&dpr=off',
        title: 'Le Phnom 1929',
        description: 'Le Phnom 1929 is our French-style brasserie. More than just a space for enjoying delicious cuisine, Le Phnom 1929 is a place to be seen, to have fun and to share precious time with family and friends. Adding to the experience is an open kitchen, sublime cocktails and our Around the World in 80 Wines programme.',
    },
    {
        imageUrl: 'https://m.ahstatic.com/is/image/accorhotels/aja_p_5801-24?qlt=82&wid=1199&ts=1739965274660&dpr=off',
        title: 'Elephant Bar',
        description: 'The Elephant Bar’s signature cocktail is the Femme Fatale, concocted for Jacqueline Kennedy during her visit in 1967. A heady mix of champagne, cognac and crème à la fraise des bois, it’s still on the menu today – along with one of Asia’s largest selections of gin, including our own Elephant Bar Gin.',
    },
    {
        imageUrl: 'https://m.ahstatic.com/is/image/accorhotels/aja_p_5801-26?qlt=82&wid=1199&ts=1739965274628&dpr=off',
        title: 'Resturant Le Royal',
        description: 'Set beneath a glorious handpainted ceiling, Restaurant Le Royal showcases centuries-old dining rituals and traditional recipes from the Cambodian royal family alongside modern Khmer gastronomy, as well as a unique signature guéridon, or tableside service.',
    }
];

// Fitness Gallery Images
const mainFoodImages = 'https://m.ahstatic.com/is/image/accorhotels/aja_p_7242-49?qlt=82&wid=1199&ts=1724162189976&dpr=off';
const collageFoodImages = [
    'https://m.ahstatic.com/is/image/accorhotels/aja_p_7242-60?qlt=82&wid=1199&ts=1724162244413&dpr=off',
    'https://m.ahstatic.com/is/image/accorhotels/aja_p_7242-53?qlt=82&wid=1199&ts=1724162189099&dpr=off',
    'https://m.ahstatic.com/is/image/accorhotels/aja_p_7242-58?qlt=82&wid=1199&ts=1724162296493&dpr=off',
    'https://m.ahstatic.com/is/image/accorhotels/aja_p_7242-52?qlt=82&wid=1199&ts=1724162233448&dpr=off'
];


// --- THE MAIN PAGE COMPONENT ---

function Dining() {
    // Style object for the hero section background image
    const heroStyle = {
        backgroundImage: `url(${heroImageUrl})`
    };

    return (
        <div className="dining-page-container">
            {/* --- Hero Section (Contains the Navbar) --- */}
            <header className="dining-hero-section-specific" style={heroStyle}>
                <div className="dining-hero-overlay-specific"></div>
                <Navbar expand="lg" className="dining-navbar-specific" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home" className="dining-logo-text-specific">
                            <svg width="24" height="24" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" className="dining-logo-svg-specific me-2"><path d="M25 4 L46 25 L25 46 L4 25 Z" strokeWidth="3" fill="none"/></svg>
                            Cambodia Palace
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="dining-main-navbar-nav-specific" />
                        <Navbar.Collapse id="dining-main-navbar-nav-specific" className="justify-content-end">
                            <Nav className="dining-main-nav-specific">
                                <Nav.Link as={Link} to="/">Home</Nav.Link>
                                <Nav.Link as={Link} to="/room">Rooms</Nav.Link>
                                <Nav.Link href="#dining">Dining</Nav.Link>
                                <Nav.Link href="#activities">Activities</Nav.Link>
                                <Nav.Link href="#spa">Spa</Nav.Link>
                                <Nav.Link href="#gallery">Gallery</Nav.Link>
                                <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                            </Nav>
                            <Button className="dining-header-book-btn-specific ms-3">Book Now</Button>
                            <img src="https://i.imgur.com/IV4jU3m.jpeg" alt="User Avatar" className="dining-user-avatar-specific" />
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Container className="dining-hero-content-specific">
                    <h1 className="dining-hero-title-specific">Foods and Great Resturant</h1>
                    <p className="dining-hero-subtitle-specific">A hotel of great foods</p>
                </Container>
            </header>

            {/* --- Main Content --- */}
            <main>
                <Container>
                    {/* --- Rejuvenate Senses --- */}
                    <section className="dining-section-specific text-center">
                        <h2 className="dining-section-title-specific">Enjoy Your Food </h2>
                        <p className="dining-section-intro-text-specific">
                           Visit our wide range of resturant which serve greate food from all around the world . The chef are well experience and have cook delicious food alot of time and for a very long time . Come and enjoy amazing food at every of our resturant located in the hotel.
                        </p>
                    </section>

                    {/* --- Spa Treatments --- */}
                    <section className="dining-section-specific">
                        <h2 className="dining-section-title-specific">Foods and Events</h2>
                        <Row>
                            {foodOfferings.map((Offering, index) => (
                                <Col lg={4} md={6} key={index} className="mb-4">
                                    <div className="dining-food-offering-card-specific">
                                        <h3 className="dining-card-title-specific">{Offering.title}</h3>
                                        <p className="dining-card-description-specific">{Offering.description}</p>
                                        <a href="#book" className="dining-cta-link-specific">Book Now &rarr;</a>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </section>

                    {/* --- Wellness Programs --- */}
                    <section className="dining-section-specific">
                        <h2 className="dining-section-title-specific">Resturants</h2>
                        <Row>
                            {resturantatHotel.map((resturant, index) => (
                                <Col md={6} key={index} className="mb-4">
                                    <div className="dining-restaurant-card-specific">
                                        <img src={resturant.imageUrl} alt={resturant.title} className="dining-card-img-specific" />
                                        <div className="dining-card-body-specific">
                                            <h3 className="dining-card-title-specific">{resturant.title}</h3>
                                            <p className="dining-card-description-specific">{resturant.description}</p>
                                            <a href="#learn" className="dining-cta-link-specific">Learn More &rarr;</a>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </section>

                    {/* --- Fitness Facilities --- */}
                    <section className="dining-section-specific">
                        <h2 className="dining-section-title-specific">Foods</h2>
                         <p className="dining-section-intro-text-specific">
                            Taste some delicious food at all of our resturant at the hotel , we offer greate and amazing food to all our guest , enjoy delicios food while at our lovely and nice hotel.
                        </p>
                        <div className="dining-food-gallery-specific">
                            <div className="dining-gallery-main-image-specific">
                                <img src={mainFoodImages} alt="Foods" />
                            </div>
                            <div className="dining-gallery-collage-specific">
                                {collageFoodImages.map((image, index) => (
                                    <div className="dining-gallery-collage-item-specific" key={index}>
                                        <img src={image} alt={`Food collage item ${index + 1}`} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                    <footer className="dining-footer-section">
                        <Container>
                            <div className="dining-footer-top">
                                <div className="anantara-footer-brand">
                                    <img
                                        src="https://www.raffles.com/content/dam/raffles-aem/property-logos/logo-phnom-penh-horizontal.svg"
                                        height="25"
                                        className="d-inline-block align-top me-2"
                                        alt="Anantara Angkor logo"
                                    />
                                    Anantara Angkor
                                </div>
                                <Nav className="dining-footer-nav">
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

export default Dining;