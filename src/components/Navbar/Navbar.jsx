import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logoScrolled from '../../assets/images/main-logo1.png';
import logoTop from '../../assets/images/main-logo2.png';
import { servicesData } from '../../data/servicesData';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
        setIsServicesOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Projects', path: '/projects' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
            <div className="container navbar-container">
                <Link to="/" className="navbar-logo" aria-label="Design Engineers Home">
                    <img src={scrolled ? logoScrolled : logoTop} alt="Design Engineers Logo" className="nav-logo-img" />
                    <span className="logo-text">
                        <span className="logo-design">DESIGN</span>
                        <span className="logo-engineers"> ENGINEERS</span>
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="navbar-links">
                    {navLinks.map((link) => (
                        link.name === 'Services' ? (
                            <div
                                key={link.name}
                                className="nav-item-dropdown"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                <Link
                                    to={link.path}
                                    className={`nav-link ${location.pathname.startsWith('/services') ? 'active' : ''}`}
                                >
                                    {link.name}
                                    <svg className={`dropdown-icon ${isHovered ? 'rotated' : ''}`} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                        <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                </Link>

                                <AnimatePresence>
                                    {isHovered && (
                                        <motion.div
                                            className="dropdown-menu"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {servicesData.map((service) => (
                                                <Link
                                                    key={service.id}
                                                    to={`/services/${service.id}`}
                                                    className="dropdown-item"
                                                >
                                                    {service.title}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ) : (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                            >
                                {link.name}
                            </Link>
                        )
                    ))}
                    <Link to="/contact" className="btn btn-primary nav-cta">
                        Contact Us
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className={`mobile-toggle ${isOpen ? 'active' : ''}`}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Close Menu" : "Open Menu"}
                    aria-expanded={isOpen}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="mobile-menu"
                    >
                        <div className="mobile-menu-links">
                            {navLinks.map((link) => (
                                link.name === 'Services' ? (
                                    <div key={link.name} className="mobile-nav-item-dropdown">
                                        <div
                                            className={`mobile-nav-link ${location.pathname.startsWith('/services') ? 'active' : ''}`}
                                            onClick={() => setIsServicesOpen(!isServicesOpen)}
                                        >
                                            {link.name}
                                            <svg className={`dropdown-icon ${isServicesOpen ? 'rotated' : ''}`} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                                <polyline points="6 9 12 15 18 9" />
                                            </svg>
                                        </div>
                                        <AnimatePresence>
                                            {isServicesOpen && (
                                                <motion.div
                                                    className="mobile-submenu"
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <Link to="/services" className="mobile-submenu-link view-all">
                                                        View All Services
                                                    </Link>
                                                    {servicesData.map((service) => (
                                                        <Link
                                                            key={service.id}
                                                            to={`/services/${service.id}`}
                                                            className="mobile-submenu-link"
                                                        >
                                                            {service.title}
                                                        </Link>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ) : (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
                                    >
                                        {link.name}
                                    </Link>
                                )
                            ))}
                            <Link to="/contact" className="btn btn-primary mobile-nav-cta">
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
