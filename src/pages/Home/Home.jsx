import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../../components/Hero/Hero';
import Testimonials from '../../components/Testimonials/Testimonials';
import SEO from '../../components/SEO';
import './Home.css';
import { Link } from "react-router-dom";
import { servicesData } from '../../data/servicesData';
import aboutImg from '../../assets/images/house2.jpg';
import ctaBg from '../../assets/images/home-b6.png';

const Home = () => {
    // Animation variants
    const slideLeft = {
        initial: { opacity: 0, x: -50 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    const slideRight = {
        initial: { opacity: 0, x: 50 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    const staggerContainer = {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true },
        transition: { staggerChildren: 0.1 }
    };

    return (
        <div className="home-page">
            <SEO
                title="Architecture & Engineering Studio"
                description="Design Engineers is a premier architecture and engineering firm in Chennai. We specialize in innovative, sustainable, and client-focused design solutions since 2009."
                keywords="architecture studio chennai, design engineers, sustainable architecture, engineering solutions"
            />
            <Hero />

            {/* About Preview Section */}
            <section className="section about-preview">
                <div className="container">
                    <div className="about-grid">
                        <motion.div
                            className="about-content"
                            {...slideLeft}
                        >
                            <span className="section-label">Who We Are</span>
                            <h2 className="section-title">Visionary Designs, Practical Solutions</h2>
                            <p>
                                Established in 2009, <strong>Design Engineers</strong> works closely with clients to provide architectural
                                design with interior space management integrating aesthetics, culture, technology and environmental sensitivity.
                            </p>
                            <p>
                                We believe that every space has a story to tell. Our mission is to translate your vision into
                                functional, sustainable, and awe-inspiring reality.
                            </p>
                            <Link to="/about#top" className="btn btn-primary">Learn More</Link>
                        </motion.div>
                        <motion.div
                            className="about-image animate-fade-right"
                            {...slideRight}
                        >
                            <img
                                src={aboutImg}
                                alt="Modern architecture office workspace of Design Engineers"
                                loading="lazy"
                            />
                            <div className="experience-badge">
                                <span className="years">15+</span>
                                <span className="text">Years of Experience</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="section bg-light">
                <div className="container">
                    <div className="text-center mb-60">
                        <motion.span className="section-label" {...slideLeft}>Our Expertise</motion.span>
                        <motion.h2 className="section-title" {...slideRight}>Specialized Design Services</motion.h2>
                    </div>
                    <div className="services-grid">
                        {servicesData.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                            >
                                <Link
                                    to={`/services/${service.id}`}
                                    className="service-card-home"
                                    style={{ display: 'block', height: '100%' }}
                                >
                                    <div className="service-card-image-wrapper">
                                        <img
                                            src={service.projectImage}
                                            alt={service.title}
                                            className="service-card-image"
                                        />
                                    </div>
                                    <div className="service-card-content">
                                        <h3>{service.title}</h3>
                                        <p>{service.shortDesc}</p>
                                        <div className="service-link">
                                            Explore Service
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <line x1="5" y1="12" x2="19" y2="12" />
                                                <polyline points="12 5 19 12 12 19" />
                                            </svg>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center mt-50 btn-view-all-wrapper">
                        <motion.div {...slideLeft}>
                            <Link to="/services" className="btn btn-primary btn-lg auto-margin">
                                View All Services
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Testimonials />

            {/* Why Choose Us Section */}
            <section className="section">
                <div className="container">
                    <div className="choose-wrapper">
                        <motion.div
                            className="choose-content"
                            {...slideLeft}
                        >
                            <span className="section-label">Why Choose Us</span>
                            <h2 className="section-title">Excellence in Every Detail</h2>
                            <div className="reasons-list">
                                <div className="reason-item">
                                    <div className="reason-number">01</div>
                                    <div className="reason-text">
                                        <h4>Experienced Professionals</h4>
                                        <p>Our team brings over a decade of expertise in architectural and engineering fields.</p>
                                    </div>
                                </div>
                                <div className="reason-item">
                                    <div className="reason-number">02</div>
                                    <div className="reason-text">
                                        <h4>Sustainable Architecture</h4>
                                        <p>We prioritize eco-friendly materials and energy-efficient design solutions.</p>
                                    </div>
                                </div>
                                <div className="reason-item">
                                    <div className="reason-number">03</div>
                                    <div className="reason-text">
                                        <h4>Client-Focused Approach</h4>
                                        <p>We listen, adapt, and collaborate closely to ensure your vision is perfectly realized.</p>
                                    </div>
                                </div>
                                <div className="reason-item">
                                    <div className="reason-number">04</div>
                                    <div className="reason-text">
                                        <h4>High Quality Delivery</h4>
                                        <p>Precision and excellence are guaranteed in every project we undertake.</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            className="choose-image"
                            {...slideRight}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1920&auto=format&fit=crop&fm=webp"
                                alt="Inside the professional design studio of Design Engineers"
                                loading="lazy"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="cta-section">
                <div className="container">
                    <motion.div
                        className="cta-card glass-effect"
                        style={{
                            backgroundImage: `url(${ctaBg})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat"
                        }}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2>Start Your Project With Us</h2>
                        <p>Ready to build something extraordinary? Contact our team today for a consultation.</p>
                        <div className="cta-btns">
                            <Link to="/contact" className="btn btn-primary">Book a Consultation</Link>
                            <Link to="/projects" className="btn btn-outline">Explore Projects</Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
