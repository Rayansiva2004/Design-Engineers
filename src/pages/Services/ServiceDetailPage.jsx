import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { servicesData } from '../../data/servicesData.jsx';
import SEO from '../../components/SEO';
import ServiceHero from '../../components/Services/ServiceHero';
import './ServiceDetailPage.css';

const ServiceDetailPage = () => {
    const { serviceId } = useParams();
    const service = servicesData.find(s => s.id === serviceId);

    if (!service) {
        return <Navigate to="/services" replace />;
    }

    const fadeIn = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    return (
        <main className="service-detail-page">
            <SEO
                title={`${service.title} | Design Engineers`}
                description={service.shortDesc}
                keywords={`architectural ${service.title}, engineering ${service.title}, chennai architecture`}
            />

            {/* Hero Section */}
            <ServiceHero
                title={service.title}
                label="EXPERT SERVICE"
                description={service.shortDesc}
                backgroundImage={service.heroImage}
            />

            {/* Content Section */}
            <section className="section service-content-section">
                <div className="container">
                    <div className="service-content-grid">
                        <motion.div
                            className="content-main"
                            {...fadeIn}
                        >
                            <div className="service-icon-large">{service.icon}</div>
                            <h2>Overview</h2>
                            <div className="full-description">
                                {service.fullDesc.map((para, index) => (
                                    <p key={index}>{para}</p>
                                ))}
                            </div>

                            {service.highlightMessage && (
                                <div style={{ color: 'var(--color-primary)', fontWeight: '600', margin: '20px 0', fontSize: '1.25rem', fontStyle: 'italic', lineHeight: '1.5' }}>
                                    {service.highlightMessage}
                                </div>
                            )}

                            <div className="features-box">
                                <h3>Key Features</h3>
                                <ul className="feature-list">
                                    {service.features.map((feature, index) => (
                                        <motion.li
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="3">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                            {feature}
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>

                            <Link to="/contact" className="btn btn-primary cta-btn">
                                {service.ctaText}
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                            </Link>
                        </motion.div>

                        <motion.div
                            className="content-visual"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="service-project-image">
                                <img src={service.projectImage} alt={`${service.title} project 1`} className="project-preview-img" loading="lazy" />
                            </div>

                            {service.secondProjectImage && (
                                <div className="service-project-image">
                                    <img src={service.secondProjectImage} alt={`${service.title} project 2`} className="project-preview-img" loading="lazy" />
                                </div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="section bottom-cta">
                <div className="container">
                    <motion.div
                        className="cta-card"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2>Ready to Start Your Project?</h2>
                        <p>Let's collaborate on creating something exceptional. Our team is here to guide you through every stage.</p>
                        <div className="cta-flex">
                            <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
                            <Link to="/services" className="btn btn-outline">All Services</Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
};

export default ServiceDetailPage;
