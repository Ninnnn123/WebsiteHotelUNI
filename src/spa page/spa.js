import { Navbar, Nav, Button, Container, Row, Col } from 'react-bootstrap';
import './spa.css';
import { Link } from 'react-router-dom';

// --- DATA FOR THE PAGE ---

// Hero Image URL
const heroImageUrl = 'https://m.ahstatic.com/is/image/accorhotels/aja_p_5801-86?qlt=82&wid=1920&ts=1701476444224&dpr=off';

// Spa Treatments Data
const spaTreatments = [
    {
        duration: '90 minutes',
        title: 'Khmer Traditional Massage',
        description: 'Experience the ancient healing art of Khmer massage, focusing on pressure points and stretching to relieve tension and improve circulation.',
    },
    {
        duration: '60 minutes',
        title: 'Aromatherapy Massage',
        description: 'Indulge in a soothing aromatherapy massage using essential oils to enhance relaxation and promote emotional balance.',
    },
    {
        duration: '120 minutes',
        title: 'Hot Stone Therapy',
        description: 'Melt away stress with our hot stone therapy, using heated stones to massage and soothe muscles, promoting deep relaxation.',
    }
];

// Wellness Programs Data
const wellnessPrograms = [
    {
        imageUrl: 'https://m.ahstatic.com/is/image/accorhotels/aja_p_5603-76?qlt=82&wid=1199&ts=1693509542525&dpr=off',
        title: 'Yoga and Meditation Retreat',
        description: 'Join our yoga and meditation retreat to find inner peace and balance. Our experienced instructors will guide you through daily sessions in a serene setting.',
    },
    {
        imageUrl: 'https://m.ahstatic.com/is/image/accorhotels/aja_p_5603-72?qlt=82&wid=1199&ts=1693509964020&dpr=off',
        title: 'Detox and Rejuvenation Package',
        description: 'Our detox package combines spa treatments, healthy meals, and fitness activities to cleanse your body and revitalize your spirit.',
    }
];

// Fitness Gallery Images
const mainFitnessImage = 'https://th.bing.com/th/id/R.2c150dd52c0e6a4edf241bdfcdf1236a?rik=oXeNZtyr9ewD1A&pid=ImgRaw&r=0';
const collageFitnessImages = [
    'https://th.bing.com/th/id/OIP.wVTljKUmYss_QmeYKf4KmQHaE8?w=262&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
    'https://th.bing.com/th/id/OIP.5ogvjNAZVl5uS9-UNrX2GAHaEK?w=282&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
    'https://th.bing.com/th/id/OIP.vl9pm0PRO6vNa31dbfPDPgHaEo?w=295&h=184&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
    'https://hips.hearstapps.com/hmg-prod/images/gym-workout-66d087d56ef90.jpg?fill=2:1&resize=1200:*'
];


// --- THE MAIN PAGE COMPONENT ---

function Spa() {
    // Style object for the hero section background image
    const heroStyle = {
        backgroundImage: `url(${heroImageUrl})`
    };

    return (
        <div className="spa-wellness-page">
            {/* --- Hero Section (Contains the Navbar) --- */}
            <header className="spa-hero-section" style={heroStyle}>
                <div className="hero-overlay"></div> {/* UPDATED: Added overlay for text readability */}
                <Navbar expand="lg" className="spa-navbar" variant="dark">
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

                <Container className="spa-hero-content">
                    <h1 className="spa-hero-title">Spa & Wellness Retreat</h1>
                    <p className="spa-hero-subtitle">A Sanctuary of Tranquility and Rejuvenation</p>
                </Container>
            </header>

            {/* --- Main Content --- */}
            <main>
                <Container>
                    {/* --- Rejuvenate Senses --- */}
                    <section className="spa-section text-center">
                        <h2 className="section-title">Rejuvenate Your Senses</h2>
                        <p className="section-intro-text">
                            Escape to our tranquil spa, a sanctuary of peace and rejuvenation. Our expert therapists offer a range of treatments designed to revitalize your body and mind. From traditional Khmer massages to modern wellness therapies, each experience is tailored to your needs. Immerse yourself in the serene ambiance and let us guide you on a journey to holistic well-being.
                        </p>
                    </section>

                    {/* --- Spa Treatments --- */}
                    <section className="spa-section">
                        <h2 className="section-title">Spa Treatments</h2>
                        <Row>
                            {spaTreatments.map((treatment, index) => (
                                <Col lg={4} md={6} key={index} className="mb-4">
                                    <div className="treatment-card">
                                        <p className="card-duration">{treatment.duration}</p>
                                        <h3 className="card-title">{treatment.title}</h3>
                                        <p className="card-description">{treatment.description}</p>
                                        <a href="#book" className="cta-link">Book Now &rarr;</a>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </section>

                    {/* --- Wellness Programs --- */}
                    <section className="spa-section">
                        <h2 className="section-title">Wellness Programs</h2>
                        <Row>
                            {wellnessPrograms.map((program, index) => (
                                <Col md={6} key={index} className="mb-4">
                                    <div className="wellness-card">
                                        <img src={program.imageUrl} alt={program.title} className="card-img" />
                                        <div className="card-body">
                                            <h3 className="card-title">{program.title}</h3>
                                            <p className="card-description">{program.description}</p>
                                            <a href="#learn" className="cta-link">Learn More &rarr;</a>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </section>

                    {/* --- Fitness Facilities --- */}
                    <section className="spa-section">
                        <h2 className="section-title">Fitness Facilities</h2>
                         <p className="section-intro-text">
                            Stay active during your stay with our state-of-the-art fitness center. Equipped with modern cardio and strength training equipment, our facilities cater to all fitness levels. Enjoy a workout with a view of our lush gardens, or join a guided fitness class to enhance your wellness journey.
                        </p>
                        <div className="fitness-gallery">
                            <div className="gallery-main-image">
                                <img src={mainFitnessImage} alt="Treadmills in a modern gym" />
                            </div>
                            <div className="gallery-collage">
                                {collageFitnessImages.map((image, index) => (
                                    <div className="gallery-collage-item" key={index}>
                                        <img src={image} alt={`Fitness collage item ${index + 1}`} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </Container>

                 {/* --- Book Appointment CTA --- */}
                 <section className="booking-cta-section">
                    <Container className="booking-cta-container">
                        <h2 className="section-title">Book Your Appointment</h2>
                        <p>
                            To book your spa treatment or wellness program, please contact our spa reception or use our online booking system. Our team is ready to assist you in creating a personalized wellness experience.
                        </p>
                        <Button className="book-now-cta-btn">Book Now</Button>
                    </Container>
                </section>
                <footer className="spa-footer-section">
                <Container>
                    <div className="spa-footer-top">
                        <div className="spa-footer-brand">
                             <img
                                src="https://www.raffles.com/content/dam/raffles-aem/property-logos/logo-phnom-penh-horizontal.svg"
                                height="25"
                                className="d-inline-block align-top me-2"
                                alt="Anantara Angkor logo"
                            />
                            Anantara Angkor
                        </div>
                        <Nav className="spa-footer-nav">
                            <Nav.Link href="#contact">Contact Us</Nav.Link>
                            <Nav.Link href="#privacy">Privacy Policy</Nav.Link>
                            <Nav.Link href="#terms">Terms of Service</Nav.Link>
                        </Nav>
                    </div>
                    <hr />
                    <p className="text-center anantara-copyright">&copy; 2024 Anantara Angkor. All rights reserved.</p>
                </Container>
                </footer>
            </main>
        </div>
    );
}

export default Spa;