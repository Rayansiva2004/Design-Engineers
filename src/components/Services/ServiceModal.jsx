import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import './ServiceModal.css';

const ServiceModal = ({ isOpen, onClose, services, currentIndex, onNext, onPrev }) => {
    const service = services[currentIndex];

    // Close on escape key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    if (!service) return null;

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { type: "spring", damping: 25, stiffness: 300 }
        },
        exit: { opacity: 0, scale: 0.8, y: 20 }
    };

    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0 }
    };

    const contentVariants = {
        initial: { opacity: 0, x: 20 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -20 }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="service-modal-overlay-wrapper">
                    <motion.div
                        className="service-modal-overlay"
                        variants={overlayVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={onClose}
                    />

                    <motion.div
                        className="service-modal-container"
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>

                        <div className="service-modal-grid">
                            {/* Left Side: Image */}
                            <div className="service-modal-image">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={service.heroImage}
                                        src={service.heroImage}
                                        alt={service.title}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.4 }}
                                    />
                                </AnimatePresence>
                                <div className="service-modal-image-overlay"></div>
                            </div>

                            {/* Right Side: Content */}
                            <div className="service-modal-content">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={service.id}
                                        variants={contentVariants}
                                        initial="initial"
                                        animate="animate"
                                        exit="exit"
                                        transition={{ duration: 0.3 }}
                                        className="modal-content-inner"
                                    >
                                        <span className="modal-label">Service Overview</span>
                                        <h2 className="modal-title">{service.title}</h2>

                                        <div className="modal-description">
                                            <p>{service.shortDesc}</p>
                                        </div>

                                        {service.highlightMessage && (
                                            <div style={{ color: 'var(--color-primary)', fontWeight: '600', marginBottom: '15px', fontSize: '1.15rem', fontStyle: 'italic' }}>
                                                {service.highlightMessage}
                                            </div>
                                        )}

                                        <div className="modal-features-section">
                                            <h4>Key Capabilities</h4>
                                            <ul className="modal-features-list">
                                                {service.features.map((feature, idx) => (
                                                    <li key={idx}>
                                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                            <polyline points="20 6 9 17 4 12" />
                                                        </svg>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>

                                {/* Navigation Controls */}
                                <div className="modal-navigation">
                                    <button onClick={onPrev} className="nav-btn prev" aria-label="Previous service">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                            <polyline points="15 18 9 12 15 6" />
                                        </svg>
                                        Prev
                                    </button>

                                    <Link to={`/services/${service.id}`} onClick={onClose} className="btn-read-more">
                                        Read More
                                    </Link>
                                    <button onClick={onNext} className="nav-btn next" aria-label="Next service">
                                        Next
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                            <polyline points="9 18 15 12 9 6" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ServiceModal;
