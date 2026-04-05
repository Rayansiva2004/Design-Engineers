import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../../components/SEO';
import ServiceModal from '../../components/Services/ServiceModal';
import { servicesData } from '../../data/servicesData.jsx';
import './ServicesPage.css';

const ServicesPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeServiceIndex, setActiveServiceIndex] = useState(0);

    const openModal = (index) => {
        setActiveServiceIndex(index);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'unset';
    };

    const nextService = () => {
        setActiveServiceIndex((prev) => (prev + 1) % servicesData.length);
    };

    const prevService = () => {
        setActiveServiceIndex((prev) => (prev - 1 + servicesData.length) % servicesData.length);
    };

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
        <main className="services-page">
            <SEO
                title="Our Services | Design & Engineering Experts"
                description="Comprehensive architectural services including 2D CAD, Commercial Design, Residential Projects, and Urban Planning. Sustainable solutions for modern needs."
                keywords="architectural services chennai, 2D CAD design, commercial architecture, urban planning india"
            />
            <section className="page-hero" style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1920&auto=format&fit=crop&fm=webp')"
            }}>
                <div className="page-hero-overlay"></div>
                <div className="page-hero-content">
                    <motion.div
                        {...slideLeft}
                    >
                        <span className="section-label">Expertise</span>
                        <h1>Our Services</h1>
                        <p>Comprehensive architectural and engineering solutions across Chennai and beyond.</p>
                    </motion.div>
                </div>
            </section>

            <section className="section bg-light">
                <div className="container">
                    <motion.div
                        className="services-detailed-grid"
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="whileInView"
                        viewport={{ once: true }}
                    >
                        {servicesData.map((service, index) => (
                            <motion.div
                                key={service.id}
                                className="service-detail-card clickable-card"
                                variants={index % 2 === 0 ? slideLeft : slideRight}
                                whileHover={{ y: -10, boxShadow: "0 25px 50px rgba(0,0,0,0.1)" }}
                                onClick={() => openModal(index)}
                            >
                                <div className="service-icon-box">
                                    <img src={service.heroImage} alt={service.title} />
                                </div>
                                <div className="service-detail-content">
                                    <h2>{service.title}</h2>
                                    <p>{service.shortDesc}</p>
                                    <ul className="feature-tags">
                                        {service.features.slice(0, 4).map((f, i) => (
                                            <li key={i}>{f}</li>
                                        ))}
                                    </ul>
                                    <div className="card-actions">
                                        <div className="btn-text">
                                            Preview Service
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <line x1="5" y1="12" x2="19" y2="12" />
                                                <polyline points="12 5 19 12 12 19" />
                                            </svg>
                                        </div>

                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <section className="section services-cta">
                <div className="container">
                    <motion.div
                        className="service-cta-content"
                        {...slideRight}
                    >
                        <h2>Let's Bring Your Vision to Life</h2>
                        <p>Our team of expert design engineers is ready to discuss your next big project.</p>
                        <Link to="/contact" className="btn btn-primary">Start Your Consultation</Link>
                    </motion.div>
                </div>
            </section>

            <ServiceModal
                isOpen={isModalOpen}
                onClose={closeModal}
                services={servicesData}
                currentIndex={activeServiceIndex}
                onNext={nextService}
                onPrev={prevService}
            />
        </main>
    );
};

export default ServicesPage;
