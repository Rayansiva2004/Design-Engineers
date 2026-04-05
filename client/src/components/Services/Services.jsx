import { Link } from 'react-router-dom';
import { servicesData } from '../../data/servicesData';
import './Services.css';

const Services = ({ showAll = false }) => {
    const displayedServices = showAll ? servicesData : servicesData.slice(0, 3);

    return (
        <section className="services-section section" id="services-section">
            <div className="container">
                <div className="section-header animate-fade-up">
                    <span className="section-label">What We Do</span>
                    <h2 className="section-title">Our Services</h2>
                    <p className="section-subtitle">
                        Comprehensive architecture and engineering solutions tailored
                        to bring your most ambitious projects to life.
                    </p>
                </div>

                <div className="services-grid">
                    {displayedServices.map((service, index) => (
                        <div
                            key={index}
                            className={`service-card animate-fade-up delay-${index + 1}`}
                        >
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.shortDesc}</p>
                        </div>
                    ))}
                </div>

                {!showAll && (
                    <div className="services-cta animate-fade-up">
                        <Link to="/services" className="btn btn-primary">
                            View All Services
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Services;
