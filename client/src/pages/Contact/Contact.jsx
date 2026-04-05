import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ContactForm from '../../components/ContactForm/ContactForm';
import SEO from '../../components/SEO';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import './Contact.css';

const Contact = () => {
    useScrollAnimation();

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

    return (
        <main className="contact-page">
            <SEO
                title="Contact Us | Start Your Project"
                description="Get in touch with Design Engineers for architectural planning and engineering consultancy in Chennai. Let's build your vision together."
                keywords="contact architects chennai, hire engineering firm, project consultation, design engineers location"
            />
            {/* Page Header */}
            <section className="page-hero" style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=80&fm=webp')"
            }}>
                <div className="page-hero-overlay"></div>
                <div className="page-hero-content">
                    <motion.div
                        {...slideLeft}
                    >
                        <span className="section-label">Connect</span>
                        <h1>Contact Design Engineers</h1>
                        <p>Let's discuss your next landmark project today.</p>
                    </motion.div>
                </div>
            </section>

            <section className="contact-main section bg-light">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Info Panel */}
                        <motion.div className="contact-sidebar" {...slideLeft}>
                            <div className="contact-info-card-premium">
                                <h3>Company Details</h3>
                                <p>Our team of experts is ready to transform your architectural vision into a structural reality.</p>

                                <div className="contact-details-list">
                                    <div className="contact-detail-item">
                                        <div className="detail-icon">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                                <polyline points="9 22 9 12 15 12 15 22" />
                                            </svg>
                                        </div>
                                        <div className="detail-text">
                                            <h4>Company Name</h4>
                                            <p>Design Engineers</p>
                                        </div>
                                    </div>

                                    <div className="contact-detail-item">
                                        <div className="detail-icon">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                                <circle cx="12" cy="10" r="3" />
                                            </svg>
                                        </div>
                                        <div className="detail-text">
                                            <h4>Location</h4>
                                            <p>#22/68, Venkatesan Street, West Tambaram, Chennai - 600045</p>
                                        </div>
                                    </div>

                                    <div className="contact-detail-item">
                                        <div className="detail-icon">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                                <polyline points="22,6 12,13 2,6" />
                                            </svg>
                                        </div>
                                        <div className="detail-text">
                                            <h4>Email</h4>
                                            <p>info@designengineers.com</p>
                                        </div>
                                    </div>

                                    <div className="contact-detail-item">
                                        <div className="detail-icon">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                                            </svg>
                                        </div>
                                        <div className="detail-text">
                                            <h4>Phone</h4>
                                            <p>+91 97908 74661<br />+91 98400 34219</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <motion.div
                                className="map-card-premium"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <iframe
                                    title="Design Engineers Location"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6790209189717!2d80.11182167484058!3d12.928339787383035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525f71fc65e1d5%3A0x8227ef4c04fd1a55!2sDesign%20Engineers!5e0!3m2!1sen!2sin!4v1773947820445!5m2!1sen!2sin"
                                    width="100%"
                                    height="300"
                                    style={{ border: 0, borderRadius: '12px' }}
                                    allowFullScreen=""
                                    loading="lazy"
                                ></iframe>
                            </motion.div>
                        </motion.div>

                        {/* Contact Form Component */}
                        <motion.div
                            className="contact-form-wrapper-premium"
                            {...slideRight}
                        >
                            <ContactForm />
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;
