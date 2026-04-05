import { Link } from 'react-router-dom';
import { servicesData } from '../../data/servicesData';
import './Footer.css';
import logo from '../../assets/images/main-logo2.png';

const Footer = () => {
    return (
        <footer className="footer" id="footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Brand */}
                    <div className="footer-brand">
                        <Link to="/" className="footer-logo">
                            <img src={logo} alt="Design Engineers Logo" className="footer-logo-img" />
                            <div className="footer-logo-text">
                                <span className="logo-design">DESIGN</span>
                                <span className="logo-engineers">ENGINEERS</span>
                            </div>
                        </Link>
                        <p>
                            Architectural and engineering excellence for over +15 years.
                            We build spaces that inspire and structures that endure.
                        </p>
                        <div className="footer-social">
                            <a
                                href="https://www.facebook.com/share/1DvJroPWU2/?mibextid=wwXIfr"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                </svg>
                            </a>
                            <a
                                href="https://www.instagram.com/design_engineers_09?igsh=MW4zd2o3dTN2aTAycQ%3D%3D&utm_source=qr"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-col">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/projects">Projects</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="footer-col">
                        <h4>Services</h4>
                        <ul>
                            {servicesData.map((service) => (
                                <li key={service.id}><Link to={`/services/${service.id}`}>{service.title}</Link></li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-col">
                        <h4>Contact</h4>
                        <div className="footer-contact-item">
                            <div className="footer-contact-icon">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                            </div>
                            <span className="footer-contact-text">
                                #22/68, Venkatesan Street, West Tambaram,<br />Chennai - 600045
                            </span>
                        </div>
                        <div className="footer-contact-item">
                            <div className="footer-contact-icon">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                            </div>
                            <span className="footer-contact-text">
                                +91 97908 74661<br />
                                +91 98400 34219
                            </span>
                        </div>
                        <div className="footer-contact-item">
                            <div className="footer-contact-icon">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                            </div>
                            <span className="footer-contact-text">
                                designengineers12@gmail.com
                            </span>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Design Engineers. All rights reserved.</p>
                    <div className="footer-bottom-links">
                        <Link to="/">Privacy Policy</Link>
                        <Link to="/">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
