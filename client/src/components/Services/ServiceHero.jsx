import React from 'react';
import { motion } from 'framer-motion';

const ServiceHero = ({ title, label = "EXPERT SERVICE", description, backgroundImage }) => {
    return (
        <section className="page-hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="page-hero-overlay"></div>
            <div className="page-hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="section-label">{label}</span>
                    <h1>{title}</h1>
                    {description && <p>{description}</p>}
                </motion.div>
            </div>
        </section>
    );
};

export default ServiceHero;
